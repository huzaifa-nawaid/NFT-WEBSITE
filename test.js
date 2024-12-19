/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

let throttleTimeout;
document.addEventListener('mousemove', (event) => {
  clearTimeout(throttleTimeout);

  throttleTimeout = setTimeout(() => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate colors based on cursor position
    const color1 = `rgba(${(clientX / windowWidth) * 255}, 0, 255, 0.1)`;
    const color2 = `rgba(255, ${(clientY / windowHeight) * 255}, 0, 0.2)`;

    // Update overlay background
    document.querySelector('.overlay').style.background = `
      linear-gradient(145deg, ${color1}, transparent),
      linear-gradient(45deg, ${color2}, transparent)
    `;
  }, 50); // Delay by 50ms (adjust as needed)
});

var typed = new Typed(".auto-typer", {
   strings: ["NFT MARKET", "EXPLORE IT", "TRADE IT", "DRAW IT", " DIGITALIZE IT",],
   typeSpeed: 200,  
   backSpeed: 200, 
   loop: true
});


document.querySelectorAll(".accordion").forEach((accordion) => {
   accordion.addEventListener("click", function () {
     const faq = this.parentElement;
     faq.classList.toggle("active");
 
     const panel = faq.querySelector(".pannel");

     // Avoid recalculating if already expanded/collapsed
     if (faq.classList.contains("active")) {
       panel.style.height = panel.scrollHeight + "px"; // Expand
     } else {
       panel.style.height = 0; // Collapse
     }
   }); // Correct closing of addEventListener
}); // Correct closing of