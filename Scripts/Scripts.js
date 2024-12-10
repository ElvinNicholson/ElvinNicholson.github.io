// Read more buttons
document.getElementById("button_tictako").onclick = function () {toggle_read_more("more_tictako")};
document.getElementById("button_race_unity").onclick = function () {toggle_read_more("more_race_unity")};
document.getElementById("button_race_raylib").onclick = function () {toggle_read_more("more_race_raylib")};
document.getElementById("button_race_editor").onclick = function () {toggle_read_more("more_race_editor")};
document.getElementById("button_pacman").onclick = function () {toggle_read_more("more_pacman")};
document.getElementById("button_platformer").onclick = function () {toggle_read_more("more_platformer")};
document.getElementById("button_get_therapy").onclick = function () {toggle_read_more("more_get_therapy")};
document.getElementById("button_chatroom").onclick = function () {toggle_read_more("more_chatroom")};
// document.getElementById("button_pong").onclick = function () {toggle_read_more("more_pong")};
document.getElementById("button_boss_beater").onclick = function () {toggle_read_more("more_boss_beater")};
document.getElementById("button_afterlife_unity").onclick = function () {toggle_read_more("more_afterlife_unity")};
document.getElementById("button_afterlife_directx").onclick = function () {toggle_read_more("more_afterlife_directx")};
document.getElementById("button_shutteredMinds").onclick = function () {toggle_read_more("more_shutteredMinds")};
document.getElementById("button_dialogueEditor").onclick = function () {toggle_read_more("more_dialogueEditor")};
document.getElementById("button_zipZap").onclick = function () {toggle_read_more("more_zipZap")};
document.getElementById("button_stagecraft").onclick = function () {toggle_read_more("more_stagecraft")};
document.getElementById("button_mlagent").onclick = function () {toggle_read_more("more_mlagent")};
document.getElementById("button_cctp").onclick = function () {toggle_read_more("more_cctp")};
document.getElementById("button_vrflood").onclick = function () {toggle_read_more("more_vrflood")};

function toggle_read_more(read_more_element) {
    document.getElementById(read_more_element).classList.toggle("show");
}

let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideID = ["mySlides_tictako", "mySlides_raceUnity", "mySlides_raceRaylib", "mySlides_raceEditor", "mySlides_afterlifeUnity",
    "mySlides_afterlifeDirectX", "mySlides_getTherapy", "mySlides_bossBeater", "mySlides_pacman", "mySlides_platformer",
    "mySlides_chatroom", "mySlides_shutteredMinds", "mySlides_dialogueEditor", "mySlides_zipZap", "mySlides_stagecraft",
    "mySlides_mlagent", "mySlides_cctp", "mySlides_vrflood"];
let dotID = ["dot_tictako", "dot_raceUnity", "dot_raceRaylib", "dot_raceEditor", "dot_afterlifeUnity",
    "dot_afterlifeDirectX", "dot_getTherapy", "dot_bossBeater", "dot_pacman", "dot_platformer",
    "dot_chatroom", "dot_shutteredMinds", "dot_dialogueEditor", "dot_zipZap", "dot_stagecraft",
    "dot_mlagent", "dot_cctp", "dot_vrflood"];

let i;
for (i = 0; i <= slideID.length; i++)
{
    showSlides(1, i);
}

function plusSlides(slide, index) {
    showSlides(slideIndex[index] += slide, index);
}

function goToSlide(slide, index) {
    showSlides(slideIndex[index] = slide, index);
}

function showSlides(slide, index) {
    let i;
    let x = document.getElementsByClassName(slideID[index]);
    let dot = document.getElementsByClassName(dotID[index]);

    if (slide > x.length)
    {
        slideIndex[index] = 1;
    }
    if (slide < 1)
    {
        slideIndex[index] = x.length;
    }

    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
        dot[i].className = dot[i].className.replace(" active", "");
    }
    x[slideIndex[index]-1].style.display = "block";
    dot[slideIndex[index]-1].className += " active";
}