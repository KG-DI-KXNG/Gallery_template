const home_page = document.querySelector(".home_page");
const upload_photo = document.querySelector(".upload_photo");
const image_wrapper = document.querySelector(".image__wrapper");
const home_wrapper = document.querySelector(".home__wrapper");

window.addEventListener("load", () => {
	upload_photo.addEventListener("click", () => {
		alert("This button doesn't actually upload images but hey...\nGood try!");
	});

	home_page.addEventListener("click", () => {
		location.href = document.baseURI.replace("upload_photo.html", "");
	});

	image_wrapper.addEventListener("mouseenter", () => {
		home_wrapper.style.display = "block";
	});

	home_wrapper.addEventListener("mouseleave", () => {
		home_wrapper.style.display = "none";
	});
});
