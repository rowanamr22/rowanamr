const images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.style.filter = "brightness(60%)";
    });

    image.addEventListener("mouseout", () => {
        image.style.filter = "brightness(99%)";
    });
});