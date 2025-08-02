// image galary

const image_list = [
    {src: "img1.png", alt: "image1"},
    {src: "img2.jpg", alt: "image2"},
    {src: "img3.png", alt: "image3"},
    {src: "img4.png", alt: "image4"},
    {src: "img5.png", alt: "image5"},
    {src: "img6.png", alt: "image6"},
    {src: "img7.png", alt: "image7"}
]

const large_img = document.querySelector(".large_img");
const small_img = document.querySelector(".small_img");
const button = document.querySelector(".button");
const display_img = document.querySelector(".display_img");

image_list.forEach(image =>{
small_img.style.display = "flex";
small_img.style.overflow = "hidden";

const new_image = document.createElement("img");
new_image.setAttribute("src",image.src);
new_image.setAttribute("alt",image.alt);
new_image.style.height="100%"
new_image.style.width="20%"
small_img.append(new_image);

new_image.addEventListener("click",() =>{
display_img.setAttribute("src", image.src);
display_img.setAttribute("alt", image.alt);
display_img.style.height = "100%";

        
    })
})


display_img.src = image_list[0].src;
display_img.alt = image_list[0].alt;

function add_opacity(){

    display_img.classList.toggle("dark");

}