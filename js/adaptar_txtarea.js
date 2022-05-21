var txtArea = document.querySelector(".txt_entrada");
console.log(txtArea);

txtArea.addEventListener("click", function() {
	txtArea.textContent = "";
});

txtArea.addEventListener("input", function() {
	txtArea.style.height = "600px";
});