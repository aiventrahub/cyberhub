/* ==========================================================
   CyberHub Bangladesh v2
   Premium JavaScript
========================================================== */

/* ===========================
Loader
=========================== */

window.addEventListener("load", () => {

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

},800);

});

/* ===========================
Mobile Menu
=========================== */

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

if(menuBtn){

menuBtn.onclick=()=>{

navLinks.classList.toggle("active");

};

}

/* ===========================
Close Menu After Click
=========================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

navLinks.classList.remove("active");

};

});

/* ===========================
Sticky Header
=========================== */

const header=document.querySelector("#header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/* ===========================
FAQ Accordion
=========================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(f=>{

if(f!==item){

f.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/* ===========================
Counter Animation
=========================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ===========================
Scroll Reveal
=========================== */

const revealElements=document.querySelectorAll(

".card,.price-card,.feature-card,.review-card,.stat-box,.pay-card,.contact-box"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});/* ==========================================================
Scroll To Top
========================================================== */

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================================
Active Navigation
========================================================== */

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================================
Button Ripple
========================================================== */

document.querySelectorAll(".btn,.buy-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=(e.clientX-rect.left-size/2)+"px";

circle.style.top=(e.clientY-rect.top-size/2)+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ==========================================================
Hero Tilt Effect
========================================================== */

const hero=document.querySelector(".hero-image img");

if(hero){

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

hero.style.transform=

`perspective(1000px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
scale(1.03)`;

});

hero.addEventListener("mouseleave",()=>{

hero.style.transform=

"perspective(1000px) rotateY(0) rotateX(0) scale(1)";

});

}

/* ==========================================================
Auto Review Slider
========================================================== */

const slider=document.querySelector(".review-slider");

if(slider && window.innerWidth<992){

let position=0;

setInterval(()=>{

position++;

if(position>=slider.children.length){

position=0;

}

slider.style.transform=`translateX(-${position*100}%)`;

},3500);

}

/* ==========================================================
Console Message
========================================================== */

console.log(

"%cCyberHub Bangladesh Loaded Successfully",

"color:#00E676;font-size:18px;font-weight:bold;"

);