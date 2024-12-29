$(document).ready(function () {
    // Initialize Owl Carousel
    let owl = $('.serviceSlider').owlCarousel({
        loop: true,             // Loop through the slides
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 3000,  // Time between each slide (3 seconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        dots: false, // Disable default dots for custom ones
        responsive: {           // Adjust the number of items based on screen size
            0: {
                items: 1        // 1 item on small screens
            },
            600: {
                items: 2        // 2 items on medium screens
            },
            1000: {
                items: 3        // 3 items on large screens
            }
        }
    });

    // Custom Dots
    $('.dots__').on('click', function () {
        let slideIndex = $(this).data('slide');
        owl.trigger('to.owl.carousel', [slideIndex, 300]);
    });

    // Update active dot on slide change
    owl.on('changed.owl.carousel', function(event) {
        let currentSlide = event.item.index;
        let totalSlides = event.item.count;  // Total number of slides
        
        // If loop is enabled, reset the current index after full rotation
        let normalizedIndex = (currentSlide % totalSlides + totalSlides) % totalSlides;

        // Update active class on the correct dot
        $('.dots__').removeClass('active');
        $('.dots__').eq(normalizedIndex).addClass('active');
    });

    // Make the first dot active initially
    $('.dots__').first().addClass('active');
});



$(document).ready(function () {
    // Initialize Owl Carousel
    let owl = $('.exploreSlider').owlCarousel({
        loop: true,             // Loop through the slides
        margin: 20,             // Space between slides
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 3000,  // Time between each slide (3 seconds)
        autoplayHoverPause: true, // Pause autoplay when hover over the carousel
        responsive: {           // Adjust the number of items based on screen size
            0: {
                items: 1        // 1 item on small screens
            },
            600: {
                items: 2        // 2 items on medium screens
            },
            1000: {
                items: 3        // 3 items on large screens
            }
        }
    });
});



$(document).ready(function () {
    // Initialize Owl Carousel
    let owl = $('.stuReviewSlider').owlCarousel({
        loop: true,             // Loop through the slides
        margin: 20,             // Space between slides
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 2000,  // Time between each slide (3 seconds)
        autoplayHoverPause: true, // Pause autoplay when hover over the carousel
        
        responsive: {           // Adjust the number of items based on screen size
            0: {
                items: 1        // 1 item on small screens
            },
           
        }
    });
});








