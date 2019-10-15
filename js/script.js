document.addEventListener("DOMContentLoaded", function(){
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
    });
    const formListener = document.getElementById('submit');
    formListener.addEventListener('submit', function(){
        alert("Thank you for subscribing!")
    });
});  // end of doc ready
