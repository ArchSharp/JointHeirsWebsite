window.onscroll = function () {
  myFunction()
}
window.onload = function () {
  myLoader()
  FooterElement()
}

const sticky_top = document.getElementById('fixedcolour')
const loader = document.getElementById('loader')
const main = document.getElementById('main')
const flex1 = document.getElementById('flex1')
const flex2 = document.getElementById('flex2')
const flex3 = document.getElementById('flex3')

var entry = ''
const flexArray = ['Home', 'Features', 'Pricing', 'FAQs', 'About']

var sticky = sticky_top.offsetTop
var myvar
function myFunction() {
  if (window.pageYOffset >= sticky + 10) {
    sticky_top.style.backgroundColor = 'darkslateblue'
  } else if (window.pageYOffset < sticky + 10) {
    sticky_top.style.backgroundColor = ''
  }
}

function myLoader() {
  myvar = setTimeout(showPage, 3000)
}

function showPage() {
  loader.style.display = 'none'
  main.style.display = 'block'
}
function FooterElement() {
  for (let i = 0; i < 5; i++) {
    entry +=
      '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">' +
      flexArray[i] +
      '</a></li>'
  }
  flex1.innerHTML = entry
  flex2.innerHTML = entry
  flex3.innerHTML = entry
}
