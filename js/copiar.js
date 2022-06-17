var btnCopiar = document.querySelector(".btn_copiar_salida");

btnCopiar.addEventListener("click", function () {
	var textoSalida = document.querySelector(".txt_salida").textContent;
	copiarTexto(textoSalida);
});

function copiarTexto(texto) {
	var input = document.createElement("input");
	input.setAttribute("value", texto);
	document.body.appendChild(input);
	input.select();
	document.execCommand("copy");
	document.body.removeChild(input);
	alert("Texto copiado");
}
