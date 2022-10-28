window.onscroll = function() {myFunction()};
window.onload = function(){myLoader()};

var sticky_top = document.getElementById('fixedcolour');
var loader = document.getElementById('loader');
var main = document.getElementById('main');
var sticky = sticky_top.offsetTop;
var myvar;
function myFunction() {
  if (window.pageYOffset >= sticky+10) {
    sticky_top.style.backgroundColor= "brown";
    //sticky_top.style.marginTop = "0px;";
    //sticky_top.style.width = "100vw";
  } else if(window.pageYOffset < sticky+10){
    sticky_top.style.backgroundColor= "";
  }
}

function myLoader(){
  myvar = setTimeout(showPage, 7000);
}

function showPage(){
  loader.style.display = "none";
  main.style.display = "block";
}