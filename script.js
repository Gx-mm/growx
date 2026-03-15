// LOADING SCREEN AUTO HIDE

window.addEventListener("load", function(){

setTimeout(function(){

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
},500);

},1200);

});



// SMOOTH SCROLL NAVIGATION

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});



// AUTO SCREENSHOT SLIDER

const slides = document.querySelectorAll(".phone-frame");

let slideIndex = 0;

function autoSlider(){

slides.forEach((slide,i)=>{

slide.style.opacity = "0.4";
slide.style.transform = "scale(0.9)";

});

slides[slideIndex].style.opacity = "1";
slides[slideIndex].style.transform = "scale(1.05)";

slideIndex++;

if(slideIndex >= slides.length){
slideIndex = 0;
}

}

setInterval(autoSlider,2000);

autoSlider();



// SCROLL ANIMATION (AOS STYLE)

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements = document.querySelectorAll(".feature-box, .card, .phone-frame");

hiddenElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});