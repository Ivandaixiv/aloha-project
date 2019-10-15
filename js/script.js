document.addEventListener("DOMContentLoaded", function(){
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
    });
    
    // Event listener and alert when the user submits a valid email
    const formListener = document.getElementById('submit');
    formListener.addEventListener('submit', function(){
        alert("Thank you for subscribing!")
    });
});  // end of doc ready
