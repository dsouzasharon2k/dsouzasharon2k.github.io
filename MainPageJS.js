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
  


});
