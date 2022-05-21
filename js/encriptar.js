var btn_encriptar = document.querySelector(".btn_encriptar");

btn_encriptar.addEventListener("click", function() {
	var textArea = document.querySelector(".txt_entrada");
	var texto = textArea.value;
	if(texto.length > 0) {
		var alerta = document.querySelector("#alerta");

		if(!validarTexto(texto)){
			mostrarAlerta(alerta);
		} else {
			var sinSalida = document.querySelector("#sin_salida");			
			var conSalida = document.querySelector("#con_salida");
			var textoSalida = document.querySelector(".txt_salida");
			ocultarAlerta(alerta);
			sinSalida.classList.add("invisible");
			conSalida.classList.remove("invisible");
			textArea.value = "";
			var textoEncriptado = encriptarTexto(texto);
			textoSalida.textContent = textoEncriptado;
		}

	}
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

function mostrarAlerta(alerta) {
	alerta.classList.remove("invisible");
	alerta.classList.add("msj_alerta");
}

function ocultarAlerta(alerta) {
	alerta.classList.remove("msj_alerta");
	alerta.classList.add("invisible");
}

function encriptarLetra(letra) {
	var vocales = ["a","e","i","o","u"];
	var clave = ["ai","enter","imes","ober","ufat"];
	for(var i = 0; i < vocales.length; i++) {
		if(letra == vocales[i]) {
			letra = clave[i];
		}
	}
	return letra;	
}

function encriptarTexto(texto) {
	var textoEncriptado ="";
	for(var i = 0; i < texto.length; i++){
		letra = encriptarLetra(texto[i]);
		textoEncriptado = textoEncriptado + letra;
	}
	return textoEncriptado;

}