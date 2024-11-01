document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('div[class^="groupe"]');
    const divs = document.querySelectorAll("body > div.boxhide");

    images.forEach(image => {
        image.addEventListener("click", () => {
            // Masquer tous les divs
            divs.forEach(div => div.classList.add("boxhide"));
            
            // Retirer la classe active de toutes les images
            images.forEach(img => img.classList.remove("active"));
            
            // Ajouter la classe active à l'image cliquée
            image.classList.add("active");

            // Afficher le div correspondant
            const targetId = image.getAttribute("data-target");
            document.getElementById(targetId).classList.remove("boxhide");
        });
    });
});
