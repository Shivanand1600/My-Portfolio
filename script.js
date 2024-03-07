let toggleMid = document.getElementById("toggleMid")
let toggleOut = document.getElementById("toogleOuter")
// let navBtn=document.querySelectorAll(".navBtns")
// let resBtn=document.getElementsByClassName("button")
let main=document.getElementById("mainSection")

function night() {
    toggleMid.style.transform = "translateX(35px)"
    toggleMid.style.backgroundImage = `url(./images/moon.png)`
    toggleOut.style.backgroundImage = "url(./images/night.jpeg)"
    document.body.classList.toggle('dark-mode');
    main.style.boxShadow="10px 10px 10px white"
}
function day() {
    toggleMid.style.transform = "translateX(0px)"
    toggleMid.style.backgroundImage = `url(./images/sun.png)`
    toggleOut.style.backgroundImage = "url(./images/clouds.jpg)"
    document.body.classList.toggle('light-mode');
}

let count = 0;
function toggle() {
    count++;
    if (count == 1) {
        night()
    }
    else if (count == 2) {
        day()
        count = 0;
    }
}

