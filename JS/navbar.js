let isClickedNavbarMenu = false;
let blurrerNavbar = document.getElementById("mobile-menu-opened");

function enableNavbarBlurrer() {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    blurrerNavbar.style.visibility = 'visible';
}

function disableNavbarBlurrer() {
    document.body.style.overflow = 'auto'; // Enable scrolling
    blurrerNavbar.style.visibility = 'hidden';
}