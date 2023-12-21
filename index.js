const navbar = document.getElementById("navbar")
const imgesone = document.getElementById("skillsimagesOne")
const imgestwo = document.getElementById("skillsimagesTwo")
const imgesthree = document.getElementById("skillsimagesThree")

function tohome () {
  scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  })
}
function toabout () {
  scrollTo({
    top:660,
    left:0,
    behavior: "smooth"
  })
}
function toskills () {
  scrollTo({
    top:1290,
    left:0,
    behavior: "smooth"
  })
}
function toprojects () {
  scrollTo({
    top:1880,
    left:0,
    behavior: "smooth"
  })
}

function tonavbar() {
  if (scrollY >= 660) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}


document.addEventListener('DOMContentLoaded',function(){
  const dataText = [" Full-Stack Developer"];
    function typeWriter(text, i, fnCallback) {
      console.log()
      if (i < text.length ) {
        document.getElementById("fullstack").innerHTML = text.substring(0, i+1) +'<span class="span"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 10);
      }
    }

    function StartTextAnimation(i) {
      if (i >= dataText.length) {
        setTimeout(function() {
          StartTextAnimation(0);
        }, 500);
      } else if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function() {
          StartTextAnimation(i + 1);
        });
      }
    }    
  StartTextAnimation(0);
});

function frontend () {
  imgesone.style.display="flex"
  imgestwo.style.display="none"
  imgesthree.style.display="none"
}
function backend () {
  imgesone.style.display="none"
  imgestwo.style.display="flex"
  imgesthree.style.display="none"
}
function tools () {
  imgesone.style.display="none"
  imgestwo.style.display="none"
  imgesthree.style.display="flex"
}