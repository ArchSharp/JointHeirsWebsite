window.onscroll = function() {myFunction()};

var sticky_top = document.getElementById('stick');
var sticky = sticky_top.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky+10) {
    sticky_top.style.backgroundColor= "brown";
    //sticky_top.style.width = "100vw";
  } else if(window.pageYOffset < sticky+10){
    sticky_top.style.backgroundColor= "";
  }
}