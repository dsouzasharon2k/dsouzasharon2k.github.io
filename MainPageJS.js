document.addEventListener("DOMContentLoaded", function() {
    const skills = ["<b>Web Developer.</b>", "<b>Android Developer.</b>", "<b>Data Analyst.</b>", "<b>Data Engineer.</b>"];
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
                if (text[text.length - 1] === "<" || text[text.length - 1] === ">" || text[text.length - 1] === "</") {
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
});

//----------------------Online Available Button
document.addEventListener("DOMContentLoaded", function() {
    // Get the SVG element
    const svg = document.getElementById("animated-online-icon");
  
    // Define the SVG content
    /*svg.innerHTML = `
      <!-- Background rectangle with dynamic color -->
      <rect width="100" height="100" fill="var(--background-color-light)"/>
      <!-- Circles with dynamic fill color -->
      <circle cx="50" cy="50" r="40" fill="var(--background-color-light)" class="animated-circle"/>
      <circle cx="50.5" cy="50.5" r="32.5" fill="var(--background-color-light)" />
      <circle cx="50" cy="50" r="25" fill="var(--background-color-light)" class="animated-circle"/>
      <circle cx="50.5" cy="50.5" r="17.5" fill="var(--background-color-light)" />
      <!-- Paths with dynamic fill color -->
      <path d="M48.8842 47.1101L32.4297 7.75229L65.3387 7.75229L48.8842 47.1101Z" fill="var(--background-color-light)"/>
      <path d="M50 52L66.4545 91.3578H33.5455L50 52Z" fill="var(--background-color-light)"/>
      <!-- Pulsating circle with dynamic fill color -->
      <circle cx="50" cy="50" r="10" fill="var(--background-color-light)" class="animated-circle"/>
    `;*/
    
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
            circle.setAttribute('fill', 'var(--background-color-light)');
          });
        }, 600); // Adjust this delay as needed
        index = 1;
      }
    }
  
    // Call the changeColor function every 0.7 seconds
    setInterval(changeColor, 700); // Adjust this interval as needed
  


/*-----------------------End of online available button
var testiomnialData = [
    {
        avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
        name: "SLCM",
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
        name: "Merilee Beal",
        review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
    },
    {
        avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
        name: "Suzi Lankester",
        review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
        name: "Gaston Cunnow",
        review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    },
    ]
var slideHolder = document.querySelector("#slideHolder1")
console.log(slideHolder)
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    //autoplay: { delay: 1000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2
    if (window.innerWidth < 501) swiper.params.slidesPerView = 2
    swiper.update()
}*/

var swiper1 = new Swiper('.edu-blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.edu-blog-slider__pagination',
      clickable: true,
    }
  });





});