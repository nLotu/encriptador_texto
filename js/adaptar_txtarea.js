var txtArea = capturarElemento(".txt_entrada");
console.log(txtArea);

txtArea.addEventListener("click", function() {
	txtArea.textContent = "";
});

function capturarElemento(elemento) {
	var aux = document.querySelector(elemento);
	return aux;
}