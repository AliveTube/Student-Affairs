function autoSlideShow() {
    let slideIndex = 0;
    carousel();

    function carousel() {
        let x = document.getElementsByClassName("mySlides");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1
        }

        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 3000); // Change image every 3 seconds
    }
}

function keepHighlighted() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all the navbar links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through the navbar links and add the "active" class to the appropriate link
    navLinks.forEach(function (link) {
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });

}