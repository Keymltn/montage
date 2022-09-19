let width = document.getElementById("width");
let img = document.querySelector(".img")
let height = document.getElementById("height");
let borderRad = document.getElementById("radius");
let opacity = document.getElementById("opacity");
let saturate = document.getElementById("saturate");


width.addEventListener('change', () => {
    img.style.width = width.value + "px";
})

height.addEventListener('change', () => {
    img.style.height = height.value + "px";
})

borderRad.addEventListener("change", () => {
    img.style.borderRadius = borderRad.value + "px"
})

opacity.addEventListener("change", () => {
    img.style.opacity = opacity.value + "%"
})

saturate.addEventListener("change", () => {
    img.style.filter = `contrast(${saturate.value * 3.6 + "%"})`
})