window.addEventListener("DOMContentLoaded", () => {
	let button = document.getElementById("cog");
	let dropDownMenu = document.querySelector(".pref");
	console.log(dropDownMenu);
	button.addEventListener("click", (event) => {
		dropDownMenu.classList.remove("pref--hidden");
	});

	window.addEventListener("click", (event) => {
		if (event.target !== button) {
			dropDownMenu.classList.add("pref--hidden");
		}
	});
});
