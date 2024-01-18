"use strict";



document.addEventListener("DOMContentLoaded", () => {
	const block = document.querySelectorAll(".block-element__side");
	const btn = document.querySelectorAll("button.button-menu");

	function hiddenSide() {
		btn.forEach((item) => {
			item.addEventListener("click", (event) => {

				
				const target = event.target.parentElement.parentElement.parentElement,
				      targetSibling = event.target.parentElement.parentElement.parentElement.nextElementSibling;
				
				target.classList.toggle("block-element__side_active");
				targetSibling.classList.toggle("block-element__side_active");
				// // console.log(targetSibling);
				// if (target.classList.contains("block-element__side_active")) {
				// 	target.classList.remove("block-element__side_active");

				// 	targetSibling.classList.add("block-element__side","block-element__side_active");
				// }
			});
		});
	}
	hiddenSide();
});