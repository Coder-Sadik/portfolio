// for hamburger icon
const navMenu = document.getElementById("nav-menu");
const toggler = (e) => {
	e.classList.toggle("toggle");
	navMenu.classList.toggle("active");
};

//skill progress bar automation
document
	.querySelectorAll(".skill-details")
	.forEach(function (skillDetail, index) {
		const percentageText = skillDetail.querySelector(".percentage").textContent;
		const percentageValue = parseInt(percentageText); // Extract the number

		// Select the corresponding progress bar
		const progressBar = document.querySelectorAll(".skill-percentage")[index];
		progressBar.style.width = percentageValue + "%";
	});
