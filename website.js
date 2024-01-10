// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the element with the id "slideInImage"
    const slideInImage = document.getElementById("slideInImage");

    // Initialize the initial styles for opacity and transform
    slideInImage.style.opacity = 0;
    slideInImage.style.transform = "translateX(100%)";

    // Function to animate the slide-in effect
    function slideIn() {
        // Get the current opacity and position values
        const currentOpacity = parseFloat(slideInImage.style.opacity);
        const currentPosition = parseFloat(slideInImage.style.transform.replace("translateX(", "").replace("%)", ""));

        // Apply transition and update opacity and transform properties
        slideInImage.style.transition = "opacity 1s, transform 1s";
        slideInImage.style.opacity = Math.min(currentOpacity + 0.02, 1);
        slideInImage.style.transform = `translateX(${Math.max(currentPosition - 2, 0)}%)`;

        // Continue the animation using requestAnimationFrame until opacity reaches 1
        if (currentOpacity < 1) {
            requestAnimationFrame(slideIn);
        }
    }

    // Start the animation by calling the slideIn function using requestAnimationFrame
    requestAnimationFrame(slideIn);
});
