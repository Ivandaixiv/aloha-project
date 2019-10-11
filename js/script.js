document.addEventListener("DOMContentLoaded", function(){
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
    });
});  // end of doc ready
