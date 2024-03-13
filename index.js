// JavaScript
function toggleMenu() {
    var menu = document.getElementById("navbarMenu");

    menu.classList.toggle("active");
}
//p tag animation
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    animateText("description");
});

function animateText(elementId) {
    var textElement = document.getElementById(elementId);
    var text = textElement.textContent;
    var newText = "";

    for (var i = 0; i < text.length; i++) {
        // Wrap each character in a span with a unique ID and CSS animation delay
        newText += '<span style="animation-delay: ' + (i * 0.1) + 's">' + text[i] + '</span>';
    }

    // Replace the text content with the animated spans
    textElement.innerHTML = newText;
}

