const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
 menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen? "ri-close-line": "ri-menu-line" );
 });

 navLinks.addEventListener("click", ()=>{
   navLinks.classList.remove("open");
   menuBtnIcon.setAttribute("class", "ri-menu-line");
 });

 const scrollRevealOption = {
   distance : "50px",
   origin: "bottom",
   duration: 1000,
 };
//header container
scrollRevealOption().reveal(".header__container p",{
   ...scrollRevealOption,
});

scrollRevealOption().reveal(".header__container p",{
   ...scrollRevealOption,
   delay: 500,

});
//about container
scrollReveal().reveal(".about__image img",{
...scrollRevealOption,
origin:"left"
});

scrollRevealOption().reveal(".about__content .section__subheader",{
   ...scrollRevealOption,
   delay: 500,

});

scrollRevealOption().reveal(".about__content .section__header",{
   ...scrollRevealOption,
   delay: 500,

});

scrollRevealOption().reveal(".about__content .section__description",{
   ...scrollRevealOption,
   delay: 500,

});

scrollRevealOption().reveal(".about__btn",{
   ...scrollRevealOption,
   delay: 500,

});
//room container
ScrollReveal().reveal(".room__card", {
   ...scrollRevealOption,
   interval: 500,
});

//service container
ScrollReveal().reveal(".service__list li", {
   ...scrollRevealOption,
   interval: 500,
   origin:"right";
   

});