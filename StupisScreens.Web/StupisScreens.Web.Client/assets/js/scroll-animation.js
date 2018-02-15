$(document).ready(function(){

    window.sr = ScrollReveal({ reset: true });
   
    //Animating whats is section
    animateOnScroll('.whats-title', 600, 'left', '30px', 1, 150);
    animateOnScroll('.whats-des', 600, 'left', '20px', 1, 150);

    //Animating features section
    animateOnScroll('.features-title', 600, 'right', '20px', 1, 150);
    animateOnScroll('.features-des', 600, 'right', '20px', 1, 150);
    
    //Create feature section
    // animateOnScroll('.ftr-create', 600, 'bottom', '20px', 1, 150);
    // animateOnScroll('.ftr-create', 600, 'bottom', '30px', 1, 150);
    // animateOnScroll('.ftr-create', 600, 'bottom', '40px', 1, 150);

    sr.reveal('.ftr-create', { duration: 800 , scale:1 }, 150);
    sr.reveal('.ftr-edit', { duration: 800, scale:1 }, 150);
    sr.reveal('.ftr-download', { duration: 800, scale:1 }, 150);


    sr.reveal('.showkase', { duration: 800, scale : 1, origin : 'left' }, 150);
    sr.reveal('.showkase-viewer', { duration: 800, scale : 1, origin : 'bottom', distance: '10px' }, 150);

    

    
    sr.reveal('.feedback', { duration: 800, scale : 1, origin : 'left' }, 150);
    animateOnScroll('.feedback-btn', 800, 'bottom', '20px', 1, 300);


    function animateOnScroll (elem, duration, origin, distance, scale, delay)
    {
        sr.reveal( elem, 
        { 
            duration: duration, 
            origin: origin, 
            distance: distance,
            scale: scale,
            delay: delay, 
        });
    }
});





