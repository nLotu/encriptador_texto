var btn_encriptar = document.querySelector(".btn_encriptar");
console.log(btn_encriptar);

btn_encriptar.addEventListener("click", function() {
	var txt_encriptar = document.querySelector(".txt_entrada").value;
	console.log(txt_encriptar);

});

function validarTexto(texto) {

	var esValido = true;

	for(var i = 0; i < texto.length; i++) {

		if(!caracterValido(texto[i])) {
			esValido = false;
			break;
		}

	}

	return esValido;
}

function caracterValido(letra) {

	var esValido = false;
	var validos = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
	"n","ñ","o","p","q","r","s","t","u","v","w","x","y","z", " "];

	for(var i = 0; i < validos.length; i++) {
		if(letra == validos[i]) {
			esValido = true;			
		}
	}
	return esValido;
}
