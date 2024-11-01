document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('div[class^="groupe"]');
    const divs = document.querySelectorAll("body > div.boxhide");

    images.forEach(image => {
        image.addEventListener("click", () => {
            divs.forEach(div => div.classList.add("boxhide"));
            images.forEach(img => img.classList.remove("active"));
            image.classList.add("active");
            const targetId = image.getAttribute("data-target");
            document.getElementById(targetId).classList.remove("boxhide");
        });
    });
});
