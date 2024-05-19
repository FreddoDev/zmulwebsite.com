document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("zmul");
    var myDiv2 = document.getElementById("tab");
    var myDiv3 = document.getElementById("zmul-text3");
    var toggleButton = document.getElementById("play-btn");
    var video = document.getElementById("video");
    var music = document.getElementById("music")

    toggleButton.addEventListener("click", function() {
        const username = myDiv2.querySelector('#username-input').value;  // Use querySelector to get input values
        const password = myDiv2.querySelector('#password-input').value;

        if (username === "za0za_0" && password === "djgyroza0") {
            // Toggle the display property using a cleaner approach
            myDiv.style.display = myDiv.style.display === "none" ? "block" : "none";
            myDiv2.style.display = myDiv2.style.display === "none" ? "block" : "none";
            myDiv3.style.display = myDiv3.style.display === "none" ? "block" : "none";

            music.pause()

            video.style.display = "block";  // Ensure video is always displayed
            video.autoplay = true;
            video.setAttribute("preload", "auto");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
/*document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("zmul");
    var myDiv2 = document.getElementById("tab");
    var toggleButton = document.getElementById("play-btn");
    var video = document.getElementById("video");

    toggleButton.addEventListener("click", function() {
        const username = myDiv2.username.value
        const password = myDiv2.password.value

        if (username === "zaza" && password === "maria") {
            myDiv.style.display = myDiv.style.display === "none" ? "block" : "none";
            myDiv2.style.display = myDiv2.style.display === "none" ? "block" : "none";
            video.style.display = video.style.display === "none" ? "block" : "block";
            video.autoplay = true;
            video.setAttribute("preload", "auto");
        } else {
            return
        }

        /*myDiv.style.display = myDiv.style.display === "none" ? "block" : "none";
        myDiv2.style.display = myDiv2.style.display === "none" ? "block" : "none";
        video.style.display = video.style.display === "none" ? "block" : "block";
        video.autoplay = true;
        video.setAttribute("preload", "auto");
    });
});*/