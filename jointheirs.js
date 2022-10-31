window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");
var slideleft = document.getElementById('slideinleft');
var slideright = document.getElementById('slideinright');
var about = document.getElementById('about').offsetTop;
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky+30) {
    navbar.classList.add("sticky");
  } else if(window.pageYOffset < sticky+30){
    navbar.classList.remove("sticky");    
  }
  if(window.pageYOffset >= about-200){
    slideleft.classList.add("slideinleft");
    slideright.classList.add("slideinright");
    slideleft.style.visibility = "visible";
    slideright.style.visibility = "visible";
    //alert('Good God '+about);
  }else if(window.pageYOffset >= about+200){
    //alert('God is good '+about);
    slideleft.classList.remove("slideinleft");
    slideright.classList.remove("slideinright");
  }
}