window.onscroll = function() {myFunction()};
window.onload = function(){myLoader()};

const sticky_top = document.getElementById('fixedcolour');
const loader = document.getElementById('loader');
const main = document.getElementById('main');


var sticky = sticky_top.offsetTop;
var myvar;
function myFunction() {
  if (window.pageYOffset >= sticky+10) {
    sticky_top.style.backgroundColor= "brown";
  } else if(window.pageYOffset < sticky+10){
    sticky_top.style.backgroundColor= "";
  }
}

function myLoader(){
  myvar = setTimeout(showPage, 3000);
}

function showPage(){
  loader.style.display = "none";
  main.style.display = "block";
}