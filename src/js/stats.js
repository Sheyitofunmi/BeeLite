// stats.js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stats__number');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration);

    const animate = (counter, target) => {
        const increment = target / totalFrames;
        let currentCount = 0;

        const updateCounter = () => {
            currentCount += increment;
            if (currentCount < target) {
                counter.textContent = Math.ceil(currentCount);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    const startAnimation = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            animate(counter, target);
        });
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter.parentElement));
});