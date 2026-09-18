document.addEventListener('DOMContentLoaded', () => {
    const balloon = document.getElementById('balloon');

    if (!balloon) return;

    // Configuration Constants
    const CONFIG = {
        MIN_SIZE: 200,
        MAX_SIZE: 420,
        CLICK_STEP: 10,
        LEAVE_STEP: 5,
        COLORS: ['red', 'green', 'blue']
    };

    let colorIndex = 0;
    let size = CONFIG.MIN_SIZE;

    // Update balloon DOM styles
    function updateBalloon() {
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
        balloon.style.backgroundColor = CONFIG.COLORS[colorIndex];
    }

    // Color Cycle Handlers
    function nextColor() {
        colorIndex = (colorIndex + 1) % CONFIG.COLORS.length;
    }

    function prevColor() {
        colorIndex = (colorIndex - 1 + CONFIG.COLORS.length) % CONFIG.COLORS.length;
    }

    // Event Listeners
    balloon.addEventListener('click', () => {
        size += CONFIG.CLICK_STEP;
        nextColor();

        if (size > CONFIG.MAX_SIZE) {
            size = CONFIG.MIN_SIZE;
        }

        updateBalloon();
    });

    balloon.addEventListener('mouseleave', () => {
        size = Math.max(CONFIG.MIN_SIZE, size - CONFIG.LEAVE_STEP);
        prevColor();
        updateBalloon();
    });

    // Initial render
    updateBalloon();
});