
// ===== BEFORE & AFTER SLIDERS =====

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {

const number = index + 1;

const after = document.getElementById("after" + number);

const divider = document.getElementById("divider" + number);

const beforeLabel = document.getElementById("beforeLabel" + number);

const afterLabel = document.getElementById("afterLabel" + number);

slider.addEventListener("input", function () {

const value = Number(this.value);

after.style.clipPath = `inset(0 0 0 ${value}%)`;

divider.style.left = value + "%";

if(beforeLabel){
beforeLabel.style.opacity = value < 15 ? "0" : "1";
}

if(afterLabel){
afterLabel.style.opacity = value > 85 ? "0" : "1";
}

});

});

// ===== FADE IN ON SCROLL =====

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ===== HERO BUTTON HOVER =====

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});
