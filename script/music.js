document.addEventListener("DOMContentLoaded", function () {
    var PC = document.getElementById("ProcedureContent")
    var PC_button = document.getElementById("PC-button")
    var video = document.getElementById("video")
    var music = document.getElementById("music")

    PC_button.addEventListener("click", function() {
        PC.style.display = PC.style.display === "none" ? "block" : "none";
        
        music.style.display = "none"
        music.autoplay = true;
        music.loop = true;
        music.setAttribute("preload", "auto")
        console.log("music started!")
    });
})