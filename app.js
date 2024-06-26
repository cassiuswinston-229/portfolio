document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    header.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX / window.innerWidth * 15) - 5; // Adjust the multiplier to control the movement intensity
        const moveY = (e.clientY / window.innerHeight * 15) - 5;

        header.style.backgroundPositionX = moveX + 'px';
        header.style.backgroundPositionY = moveY + 'px';
    });
});