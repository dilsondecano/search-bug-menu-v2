// let nav_toggle = document.querySelector('.nav-toggle');
    // let nav_toggle-icon = document.querySelector('.nav_toggle .fa-bars');
    //let nav-rightside-ul = document.querySelector('.navtopheader > .container > .nav-rightside > .nav-rightside-ul');  

//    nav_toggle.addEventListener("click", function() {
//  alert("Hello World!");
// }); 

/* $(document).ready(function(){
  $(".nav-toggle").click(function(){
  $(".navtopheader > .container > .nav-rightside > .nav-rightside-ul").addClass("active");

  console.log("click")
  });
}); */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-rightside-ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
})


/* $(document).ready(function(){

const navRightSide = document.querySelector(".nav-rightside-ul li");
const megaBox = document.querySelector(".mega-box");

  $(".nav-rightside-ul li").hover(function(){
    $(".mega-box").slideToggle("slow");
    console.log("clicked");
  });
}); */
