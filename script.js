// script.js

document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
            button.textContent = "Mostrar más";
        } else {
            content.style.display = "block";
            button.textContent = "Mostrar menos";
        }
    });
});
