document.addEventListener("DOMContentLoaded", function() {
    const slideInImage = document.getElementById("slideInImage");

    slideInImage.style.opacity = 0;
    slideInImage.style.transform = "translateX(100%)";

    function slideIn() {
        const currentOpacity = parseFloat(slideInImage.style.opacity);
        const currentPosition = parseFloat(slideInImage.style.transform.replace("translateX(", "").replace("%)", ""));

        slideInImage.style.transition = "opacity 1s, transform 1s";
        slideInImage.style.opacity = Math.min(currentOpacity + 0.02, 1);
        slideInImage.style.transform = `translateX(${Math.max(currentPosition - 2, 0)}%)`;

        if (currentOpacity < 1) {
            requestAnimationFrame(slideIn);
        }
    }

    requestAnimationFrame(slideIn);
});