// Script for navbar (mobile)

// Enable the mobile navbar's blurrer
function toggleNavbarBlurrer() {
    let blurrerNavbar = document.getElementById("mobile-menu-opened");
    let navbarDash1 = document.getElementById("hamburger-dash-1");
    let navbarDash2 = document.getElementById("hamburger-dash-2");
    let navbarDash3 = document.getElementById("hamburger-dash-3");

    // If got called
    // getComputedStyle is to get the current value of the visibility set on the
    // external scss file. .style is for inline only
    if (getComputedStyle(blurrerNavbar).visibility === 'hidden') {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    blurrerNavbar.style.visibility = 'visible';

    navbarDash1.style.transform = "rotate(55deg)";
    navbarDash2.style.transform = "rotate(-55deg)";
    navbarDash1.style.marginTop = "0.6em";
    navbarDash2.style.marginTop = "-0.4em";
    navbarDash3.style.visibility = 'hidden';
    // If not
    } else {
        document.body.style.overflow = 'auto'; // Enable scrolling
        blurrerNavbar.style.visibility = 'hidden';

        navbarDash1.removeAttribute("style");
        navbarDash2.removeAttribute("style");
        navbarDash3.removeAttribute("style");
    }
}