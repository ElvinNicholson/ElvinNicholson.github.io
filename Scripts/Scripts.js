// Read more buttons
document.getElementById("button_tictako").onclick = function () {toggle_read_more("more_tictako")};
document.getElementById("button_race_unity").onclick = function () {toggle_read_more("more_race_unity")};
document.getElementById("button_race_raylib").onclick = function () {toggle_read_more("more_race_raylib")};
document.getElementById("button_race_editor").onclick = function () {toggle_read_more("more_race_editor")};
document.getElementById("button_pacman").onclick = function () {toggle_read_more("more_pacman")};
document.getElementById("button_platformer").onclick = function () {toggle_read_more("more_platformer")};
document.getElementById("button_get_therapy").onclick = function () {toggle_read_more("more_get_therapy")};
document.getElementById("button_chatroom").onclick = function () {toggle_read_more("more_chatroom")};
document.getElementById("button_pong").onclick = function () {toggle_read_more("more_pong")};
document.getElementById("button_boss_beater").onclick = function () {toggle_read_more("more_boss_beater")};


function toggle_read_more(read_more_element) {
    document.getElementById(read_more_element).classList.toggle("show");
}

// TICTAKO SLIDESHOW
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

// RACE UNITY SLIDESHOW
let slideIndex_race_unity = 1;
showSlides_race_unity(slideIndex_race_unity);

// Next/previous controls
function plusSlides_race_unity(n) {
    showSlides_race_unity(slideIndex_race_unity += n);
}

// Thumbnail image controls
function currentSlide_race_unity(n) {
    showSlides_race_unity(slideIndex_race_unity = n);
}

function showSlides_race_unity(n) {
    let i;
    let slides = document.getElementsByName("mySlides_race_unity");
    let dots = document.getElementsByName("dot_race_unity");
    if (n > slides.length) {slideIndex_race_unity = 1}
    if (n < 1) {slideIndex_race_unity = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_race_unity-1].style.display = "block";
    dots[slideIndex_race_unity-1].className += " active";
}

// RACE RAYLIB SLIDESHOW
let slideIndex_race_raylib = 1;
showSlides_race_raylib(slideIndex_race_raylib);

// Next/previous controls
function plusSlides_race_raylib(n) {
    showSlides_race_raylib(slideIndex_race_raylib += n);
}

// Thumbnail image controls
function currentSlide_race_raylib(n) {
    showSlides_race_raylib(slideIndex_race_raylib = n);
}

function showSlides_race_raylib(n) {
    let i;
    let slides = document.getElementsByName("mySlides_race_raylib");
    let dots = document.getElementsByName("dot_race_raylib");
    if (n > slides.length) {slideIndex_race_raylib = 1}
    if (n < 1) {slideIndex_race_raylib = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_race_raylib-1].style.display = "block";
    dots[slideIndex_race_raylib-1].className += " active";
}

// RACE EDITOR SLIDESHOW
let slideIndex_race_editor = 1;
showSlides_race_editor(slideIndex_race_editor);

// Next/previous controls
function plusSlides_race_editor(n) {
    showSlides_race_editor(slideIndex_race_editor += n);
}

// Thumbnail image controls
function currentSlide_race_editor(n) {
    showSlides_race_editor(slideIndex_race_editor = n);
}

function showSlides_race_editor(n) {
    let i;
    let slides = document.getElementsByName("mySlides_race_editor");
    let dots = document.getElementsByName("dot_race_editor");
    if (n > slides.length) {slideIndex_race_editor = 1}
    if (n < 1) {slideIndex_race_editor = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_race_editor-1].style.display = "block";
    dots[slideIndex_race_editor-1].className += " active";
}

// PACMAN SLIDESHOW
let slideIndex_pacman = 1;
showSlides_pacman(slideIndex_pacman);

// Next/previous controls
function plusSlides_pacman(n) {
    showSlides_pacman(slideIndex_pacman += n);
}

// Thumbnail image controls
function currentSlide_pacman(n) {
    showSlides_pacman(slideIndex_pacman = n);
}

function showSlides_pacman(n) {
    let i;
    let slides = document.getElementsByName("mySlides_pacman");
    let dots = document.getElementsByName("dot_pacman");
    if (n > slides.length) {slideIndex_pacman = 1}
    if (n < 1) {slideIndex_pacman = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_pacman-1].style.display = "block";
    dots[slideIndex_pacman-1].className += " active";
}

// PLATFORMER SLIDESHOW
let slideIndex_platformer = 1;
showSlides_platformer(slideIndex_platformer);

// Next/previous controls
function plusSlides_platformer(n) {
    showSlides_platformer(slideIndex_platformer += n);
}

// Thumbnail image controls
function currentSlide_platformer(n) {
    showSlides_platformer(slideIndex_platformer = n);
}

function showSlides_platformer(n) {
    let i;
    let slides = document.getElementsByName("mySlides_platformer");
    let dots = document.getElementsByName("dot_platformer");
    if (n > slides.length) {slideIndex_platformer = 1}
    if (n < 1) {slideIndex_platformer = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_platformer-1].style.display = "block";
    dots[slideIndex_platformer-1].className += " active";
}

// GET THERAPY SLIDESHOW
let slideIndex_get_therapy = 1;
showSlides_get_therapy(slideIndex_get_therapy);

// Next/previous controls
function plusSlides_get_therapy(n) {
    showSlides_get_therapy(slideIndex_get_therapy += n);
}

// Thumbnail image controls
function currentSlide_get_therapy(n) {
    showSlides_get_therapy(slideIndex_get_therapy = n);
}

function showSlides_get_therapy(n) {
    let i;
    let slides = document.getElementsByName("mySlides_get_therapy");
    let dots = document.getElementsByName("dot_get_therapy");
    if (n > slides.length) {slideIndex_get_therapy = 1}
    if (n < 1) {slideIndex_get_therapy = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_get_therapy-1].style.display = "block";
    dots[slideIndex_get_therapy-1].className += " active";
}

// CHATROOM SLIDESHOW
let slideIndex_chatroom = 1;
showSlides_chatroom(slideIndex_chatroom);

// Next/previous controls
function plusSlides_chatroom(n) {
    showSlides_chatroom(slideIndex_chatroom += n);
}

// Thumbnail image controls
function currentSlide_chatroom(n) {
    showSlides_chatroom(slideIndex_chatroom = n);
}

function showSlides_chatroom(n) {
    let i;
    let slides = document.getElementsByName("mySlides_chatroom");
    let dots = document.getElementsByName("dot_chatroom");
    if (n > slides.length) {slideIndex_chatroom = 1}
    if (n < 1) {slideIndex_chatroom = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_chatroom-1].style.display = "block";
    dots[slideIndex_chatroom-1].className += " active";
}

// PONG SLIDESHOW
let slideIndex_pong = 1;
showSlides_pong(slideIndex_pong);

// Next/previous controls
function plusSlides_pong(n) {
    showSlides_pong(slideIndex_pong += n);
}

// Thumbnail image controls
function currentSlide_pong(n) {
    showSlides_pong(slideIndex_pong = n);
}

function showSlides_pong(n) {
    let i;
    let slides = document.getElementsByName("mySlides_pong");
    let dots = document.getElementsByName("dot_pong");
    if (n > slides.length) {slideIndex_pong = 1}
    if (n < 1) {slideIndex_pong = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_pong-1].style.display = "block";
    dots[slideIndex_pong-1].className += " active";
}

// BOSS BEATER SLIDESHOW
let slideIndex_boss_beater = 1;
showSlides_boss_beater(slideIndex_boss_beater);

// Next/previous controls
function plusSlides_boss_beater(n) {
    showSlides_boss_beater(slideIndex_boss_beater += n);
}

// Thumbnail image controls
function currentSlide_boss_beater(n) {
    showSlides_boss_beater(slideIndex_boss_beater = n);
}

function showSlides_boss_beater(n) {
    let i;
    let slides = document.getElementsByName("mySlides_boss_beater");
    let dots = document.getElementsByName("dot_boss_beater");
    if (n > slides.length) {slideIndex_boss_beater = 1}
    if (n < 1) {slideIndex_boss_beater = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_boss_beater-1].style.display = "block";
    dots[slideIndex_boss_beater-1].className += " active";
}