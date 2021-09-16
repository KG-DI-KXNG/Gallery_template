let uploaded_images = document.querySelector("#currentImages");

const images = document.querySelectorAll(".section__image-grid-image");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal__close");
const modal_image = document.querySelector(".modal__image");
const home_page = document.querySelector(".home_page");
const total_images = images.length;

window.addEventListener("load", () => {
	uploaded_images.innerHTML = total_images;

	images.forEach((image) => {
		image.addEventListener("click", (event) => {
			modal_image.setAttribute("src", event.target.getAttribute("src"));
			modal.style.display = "block";
		});
	});

	modal_close.addEventListener("click", () => {
		modal.style.display = "none";
	});

	home_page.addEventListener("click", () => {
		location.href = document.baseURI;
	});
});
