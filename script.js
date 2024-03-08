let toggleMid = document.getElementById("toggleMid")
let toggleOut = document.getElementById("toogleOuter")
let navBtn=document.getElementsByClassName("navBtns")
let resBtn=document.getElementsByClassName("button")
let main=document.getElementById("mainSection")

function night() {
    toggleMid.style.transform = "translateX(35px)"
    toggleMid.style.backgroundImage = `url(./images/moon.png)`
    toggleOut.style.backgroundImage = "url(./images/night.jpeg)"
    document.body.classList.toggle('dark-mode');
    main.style.boxShadow="10px 10px 10px white"
    navBtn.forEach((buttons)=>{
        buttons.style.color="white"
    })
    resBtn[0].style.color="white"
}
function day() {
    toggleMid.style.transform = "translateX(0px)"
    toggleMid.style.backgroundImage = `url(./images/sun.png)`
    toggleOut.style.backgroundImage = "url(./images/clouds.jpg)"
    document.body.classList.toggle('light-mode');
    navBtn.forEach((buttons)=>{
        buttons.style.color="black"
    })
    resBtn[0].style.color="black"
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



 //NAVBAR-MID-BUTTONS-SCROLL-TO POSITION
 navBtn.forEach((btn)=>{
  btn[0].addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
btn[1].addEventListener("click", () => {
    window.scrollTo({ top: 140, behavior: 'smooth' });
})
btn[2].addEventListener("click", () => {
    window.scrollTo({ top: 2420, behavior: 'smooth' });
})
btn[3].addEventListener("click", () => {
    window.scrollTo({ top: 3200, behavior: 'smooth' });
})
btn[4].addEventListener("click", () => {
  window.scrollTo({ top: 3200, behavior: 'smooth' });
})
 })


