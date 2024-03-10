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
    ele2.style.backgroundColor="#343a40"
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
let ele1 = document.getElementsByClassName("navBtns");
ele1[0].addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
ele1[1].addEventListener("click", () => {
    window.scrollTo({ top: 720, behavior: 'smooth' });
})
ele1[2].addEventListener("click", () => {
    window.scrollTo({ top: 1350, behavior: 'smooth' });
})
ele1[3].addEventListener("click", () => {
    window.scrollTo({ top: 2050, behavior: 'smooth' });
})
ele1[4].addEventListener("click", () => {
    window.scrollTo({ top: 2550, behavior: 'smooth' });
})



// NAV-LOGO-SLIDE
let slideMe = document.getElementById('navLogo');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 90) {
    slideMe.classList.add('slide-left');
  } else {
    slideMe.classList.remove('slide-left');
  }
  
});

// NAVBAR-DOWN-BACKGROUND-COLOR
var ele2=document.getElementById("nav")
window.addEventListener('scroll', function() {
    if (window.scrollY >= 600) {
      ele2.style.backgroundColor="#f9f7f3"
    } else {
        ele2.style.backgroundColor="transparent"
    }
    
  });


//   NAVBAR-SCROLL-DOWN-UP
  let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("nav").style.top = "-500px";

    } else {
        // Scroll up
        document.getElementById("nav").style.top = "0px";
        
    }
    lastScrollTop = currentScroll;
});