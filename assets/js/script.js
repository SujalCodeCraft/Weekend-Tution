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
    owl.on('changed.owl.carousel', function (event) {
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






// Custom offcanvas
let offcanvasBtn = document.getElementById("barBtn");
let offCanvas = document.getElementById("customOffcanvas");
let body = document.getElementsByTagName("body")[0];  // Access the first body element

// Offcanvas open on click
offcanvasBtn.addEventListener("click", () => {
    offCanvas.classList.add("open");  // Add 'open' class to slide the offcanvas
    body.style.maxHeight = "100vh";   // Fix body height
    body.style.overflow = "hidden";   // Disable scroll
});

// Close offcanvas
let closeBtn = document.querySelector(".fa-xmark");
closeBtn.addEventListener("click", () => {
    offCanvas.classList.remove("open");  // Remove 'open' class to slide it back out
    body.style.maxHeight = "auto";       // Allow body height to expand
    body.style.overflow = "auto";        // Enable scroll again
});




// Hide loader once content is loaded
window.addEventListener("load", () => {
    let loader = document.querySelector(".dots-loader");
    loader.style.display = "none";  // Hide the loader
});





// btn.closest(".faqQuestionBox"):
// btn yeh tumhara current plus icon hai (yaani wo button jispar click kiya gaya).
// .closest(selector) ek DOM method hai jo element ke ancestors (parent, grandparent, etc.) mein se sabse pehle jo selector match kare usko return karta hai.


const toggleBtn = document.querySelectorAll(".toggleBtn");
toggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.closest(".faqQuestionBox").querySelector(".answer");
        
        // Display toggle logic
        if (answer.style.display === "none" || answer.style.display === "") {
            // Show the answer
            answer.style.display = "block";
            btn.classList.remove("bi-plus");
            btn.classList.add("bi-dash");
        } else {
            // Hide the answer
            answer.style.display = "none";
            btn.classList.remove("bi-dash");
            btn.classList.add("bi-plus");
        }
    });
});
