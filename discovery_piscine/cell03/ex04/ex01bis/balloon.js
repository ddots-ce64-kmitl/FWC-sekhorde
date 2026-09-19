$(document).ready(function() {
    const $balloon =$('#balloon');
    if (!$balloon.length) return;
    const CONFIG = {
        MIN_SIZE: 200,
        MAX_SIZE: 420,
        CLICK_STEP: 10,
        LEAVE_STEP: 5,
        COLORS: ['red', 'green', 'blue']
    };
    let colorIndex = 0;
    let size = CONFIG.MIN_SIZE;
    function updateBalloon() {
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: CONFIG.COLORS[colorIndex]
        });
    }
    function nextColor() {
        colorIndex = (colorIndex + 1) % CONFIG.COLORS.length;
    }
    function prevColor() {
        colorIndex = (colorIndex - 1 + CONFIG.COLORS.length) % CONFIG.COLORS.length;
    }
    $balloon.on('click', () => {
        size += CONFIG.CLICK_STEP;
        nextColor();
        if (size > CONFIG.MAX_SIZE) {
            size = CONFIG.MIN_SIZE;
        }
        updateBalloon();
    });
    $balloon.on('mouseleave', () => {
        size = Math.max(CONFIG.MIN_SIZE, size - CONFIG.LEAVE_STEP);
        prevColor();
        updateBalloon();
    });
    updateBalloon();
});