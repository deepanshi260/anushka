// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initial animation
    animateCake();
});

function animateCake() {
    const cake = document.querySelector('.cake-container');
    const text = document.querySelector('.birthday-text');
    
    // Add entrance animation
    cake.style.animation = 'float 3s ease-in-out infinite, fadeInUp 1s ease-out';
    text.style.animation = 'fadeInUp 1s ease-out 0.5s both';
}

function celebrate() {
    const cake = document.querySelector('.cake-container');
    const text = document.querySelector('.birthday-text');
    const btn = document.querySelector('.celebrate-btn');
    
    // Disable button during animation
    btn.disabled = true;
    btn.textContent = '🎉 Celebrating! 🎉';
    
    // Add transition classes
    cake.classList.add('transitioning');
    text.classList.add('transitioning');
    
    // Create confetti
    createConfetti();
    
    // Create additional sparkles
    createExtraSparkles();
    
    // Reset after animation
    setTimeout(() => {
        cake.classList.remove('transitioning');
        text.classList.remove('transitioning');
        btn.disabled = false;
        btn.textContent = '🎂 Celebrate! 🎂';
    }, 2000);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    // Clear existing confetti
    confettiContainer.innerHTML = '';
    
    // Create new confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confettiContainer.appendChild(confetti);
    }
}

function createExtraSparkles() {
    const cake = document.querySelector('.cake-container');
    
    // Create additional sparkles around the cake
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.width = '8px';
        sparkle.style.height = '8px';
        sparkle.style.background = '#ffd700';
        sparkle.style.borderRadius = '50%';
        sparkle.style.top = Math.random() * 200 + 'px';
        sparkle.style.left = Math.random() * 200 + 'px';
        sparkle.style.animation = 'sparkle 1.5s ease-in-out infinite';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        cake.appendChild(sparkle);
        
        // Remove sparkles after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }
}

// Add some interactive hover effects
document.querySelector('.cake-container').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.cake-container').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Add keyboard support
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        celebrate();
    }
});

// Add click on cake to celebrate
document.querySelector('.cake-container').addEventListener('click', celebrate);
