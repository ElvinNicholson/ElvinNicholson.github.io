// Read more buttons
document.getElementById("button_tictako").onclick = function () {toggle_read_more("more_tictako")};
document.getElementById("button_race_unity").onclick = function () {toggle_read_more("more_race_unity")};

function toggle_read_more(read_more_element) {
    document.getElementById(read_more_element).classList.toggle("show");
}

// TicTako Slideshow
let slideIndex_tictako = 1;
showSlides_tictako(slideIndex_tictako);

// Next/previous controls
function plusSlides_tictako(n) {
    showSlides_tictako(slideIndex_tictako += n);
}

// Thumbnail image controls
function currentSlide_tictako(n) {
    showSlides_tictako(slideIndex_tictako = n);
}

function showSlides_tictako(n) {
    let i;
    let slides = document.getElementsByName("mySlides_tictako");
    let dots = document.getElementsByName("dot_tictako");
    if (n > slides.length) {slideIndex_tictako = 1}
    if (n < 1) {slideIndex_tictako = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_tictako-1].style.display = "block";
    dots[slideIndex_tictako-1].className += " active";
}