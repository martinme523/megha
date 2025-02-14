$(document).ready(function () {
    $('.contain').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 1000, 'easeInOutCubic'); // Increased duration and smooth cubic easing
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 1000, 'easeInOutCubic'); // Smooth back animation
    });
});

function playMusic() {
    var music = document.getElementById('backgroundMusic');
    music.play();  // Play the music when the button is clicked
}