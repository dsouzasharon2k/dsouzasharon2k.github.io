




//-----------------------------------start

document.addEventListener("DOMContentLoaded", function() {
    //const skills = [<b>"Web Developer.</b>", "<b>Android Developer.</b>", "<b>Data Analyst.</b>", "<b>Data Engineer.</b>"];
    //const skills = ["Web <b>Developer.</b>", "Android   <b>Developer.</b> ", "Data   <b>Analyst.</b>", "Data   <b>Engineer.</b>"];
    const skills = ["Web Developer.", "Android   Developer. ", "Data   Analyst.", "Data   Engineer."];

    let index = 0;
    let text = "";
    let isDeleting = false;
    let typingSpeed = 100; // Adjust typing speed (milliseconds)
    let pauseDuration = 700; // Adjust pause duration before deletion (milliseconds)

    function typeEffect() {
        const currentText = skills[index];

        if (!isDeleting) {
            // Typing mode
            if (text.length < currentText.length) {
                if (currentText[text.length] === "<") {
                    // Find the end of the HTML tag
                    const tagEndIndex = currentText.indexOf(">", text.length);
                    if (tagEndIndex !== -1) {
                        text = currentText.substring(0, tagEndIndex + 1);
                    }
                } else {
                    text = currentText.substring(0, text.length + 1);
                }
            } else {
                // Switch to pause mode
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect(); // Start deletion after pause
                }, pauseDuration);
                return; // Exit the function to prevent immediate deletion
            }
        } else {
            // Deletion mode
            if (text.length > 0) {
                if (text[text.length - 1] === "<" || text[text.length - 1] === ">" || text[text.length - 1] === "</" ) {
                    // Find the start of the HTML tag
                    const tagStartIndex = text.lastIndexOf("<");
                    if (tagStartIndex !== -1) {
                        text = text.substring(0, tagStartIndex);
                    }
                } else {
                    text = text.substring(0, text.length - 1);
                }
            } else {
                // Switch back to typing mode
                isDeleting = false;
                index = (index + 1) % skills.length;
            }
        }

        document.getElementById("profile").innerHTML = text;

        const delta = isDeleting ? typingSpeed / 1 : typingSpeed;
        setTimeout(typeEffect, delta);
    }

    typeEffect();

    /****************************************************** */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
});



//----------------------Online Available Button
document.addEventListener("DOMContentLoaded", function() {
    // Get the SVG element
    const svg = document.getElementById("animated-online-icon");
    
    // Get all circles with the class "animated-circle"
    const circles = svg.querySelectorAll('.animated-circle');
  
    // Initialize the index to 2 (last circle)
    let index = 1;
  
    // Function to change the fill color of the circles
    function changeColor() {
      // Change the fill color of the current circle to green
      circles[index].setAttribute('fill', '#31EF2D');
  
      // Move to the previous circle
      index--;
  
      // If all circles have been changed to green, reset index to 0
      if(index == 1){
        circles[index].setAttribute('fill', '#31EF2D');
      }
      if (index == -1) {
        index = 0;
        // Reset all circles to the background color after a delay
        setTimeout(() => {
          circles.forEach(circle => {
            circle.setAttribute('fill', '');
          });
        }, 600); // Adjust this delay as needed
        index = 1;
      }
    }
  
    // Call the changeColor function every 0.7 seconds
    setInterval(changeColor, 700); // Adjust this interval as needed
  

    //--------------------------------------------------------------------------------------------------------------------------------
    // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

    //favicon
    // select the favicon 
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes 
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener 
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', '../2_Assets/logo/dark.svg')
  } else {
    faviconEl.setAttribute('href', '../2_Assets/logo/light.svg')
  }
}
});
