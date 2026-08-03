// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".hero-text,.hero-image,.about-card,.skill-box,.project-card,.achievement,.contact-container");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "0.8s";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// Typing Animation
// ===============================

const roles = [
    "Python Developer",
    "Django Developer",
    "Web Developer",
    "DSA Enthusiast",
    "Competitive Programmer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.createElement("h3");
roleElement.style.color = "#38bdf8";
roleElement.style.marginTop = "15px";

const heroText = document.querySelector(".hero-text");
heroText.appendChild(roleElement);

function typeRole() {

    if(charIndex < roles[roleIndex].length){

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole,100);

    }

    else{

        setTimeout(eraseRole,1500);

    }

}

function eraseRole(){

    if(charIndex > 0){

        roleElement.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseRole,50);

    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex=0;

        }

        setTimeout(typeRole,400);

    }

}

typeRole();

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>80);

});

// ===============================
// Button Hover Effect
// ===============================

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ===============================
// Project Card Animation
// ===============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) rotateX(5deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) rotateX(0deg)";

});

});

// ===============================
// Skill Box Animation
// ===============================

const skillBoxes=document.querySelectorAll(".skill-box");

skillBoxes.forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-10px) scale(1.05)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// Scroll To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#38bdf8";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 0 20px #38bdf8";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Console Message
// ===============================

console.log("Portfolio Developed by Alla Spandana 🚀");