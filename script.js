function hide(id) {
    document.getElementById(id).style.opacity = 0;
    document.getElementById(id).style.visibility = "hidden";
}

function show(id) {
    document.getElementById(id).style.visibility = "visible";
    document.getElementById(id).style.opacity = 1;
}

function esc(event) {
    var k = event.key;
    var w = document.getElementById("welcome-screen").style.visibility;
    var n = document.getElementById("nav").style.visibility;
    if (k == "Escape" && w == "hidden" && n == "hidden") {
        var a = document.getElementById("about").style.visibility;
        var c = document.getElementById("contact").style.visibility;
        var p = document.getElementById("portfolio").style.visibility;
        if (a == "visible") {
            hide("about");
        } else if (c == "visible") {
            hide("contact");
        } else if (p == "visible") {
            hide("portfolio");
        }
        show("nav");
    }
}

$("#about-link").click(function(){
    document.getElementsByClassName('container-desc')[0].style.display = "none";
    $(".container-desc").slideToggle();
});

$(".name").click(function(){
    $(".container-desc").slideToggle();
});