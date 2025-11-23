// Main JS file
console.log('Stickers by Bonnie loaded!');

// Simple interaction: Add a little bounce to the logo on click
const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    e.preventDefault();
    logo.style.transform = 'scale(1.1)';
    setTimeout(() => {
        logo.style.transform = 'scale(1)';
    }, 200);
});

// Interest Widget Logic
const thumbsUpBtn = document.getElementById('thumbs-up-btn');
const interestCount = document.getElementById('interest-count');
const thankYouMsg = document.getElementById('thank-you-msg');

// Initialize count (simulated persistence + random start for demo)
let count = parseInt(localStorage.getItem('stickerInterestCount')) || 124;
let hasVoted = localStorage.getItem('stickerHasVoted') === 'true';

interestCount.textContent = count;

if (hasVoted) {
    thumbsUpBtn.classList.add('voted');
    thumbsUpBtn.disabled = true;
    thankYouMsg.classList.remove('hidden');
    thankYouMsg.classList.add('visible');
}

thumbsUpBtn.addEventListener('click', () => {
    if (hasVoted) return;

    count++;
    interestCount.textContent = count;

    // Save to local storage
    localStorage.setItem('stickerInterestCount', count);
    localStorage.setItem('stickerHasVoted', 'true');
    hasVoted = true;

    // Visual updates
    thumbsUpBtn.classList.add('voted');
    thumbsUpBtn.disabled = true;

    thankYouMsg.classList.remove('hidden');
    // Small delay to allow display:block to apply before animating opacity
    requestAnimationFrame(() => {
        thankYouMsg.classList.add('visible');
    });

    // Confetti effect (optional but cute - simplified here with just a console log or simple animation)
    thumbsUpBtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.4)' },
        { transform: 'scale(1)' }
    ], {
        duration: 400,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
});
