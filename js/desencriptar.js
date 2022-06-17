var btnDesencriptar = document.querySelector(".btn_desencriptar");

btnDesencriptar.addEventListener("click", function() {
	var textArea = document.querySelector(".txt_entrada");
	var texto = textArea.value;

	if(texto.length > 0) {
		var alerta = document.querySelector("#alerta");
		if(!validarTexto(texto)){
			alert("El texto ingresado no es valido. No se permiten mayusculas, acentos y caracteres especiales");
		} else {
			var sinSalida = document.querySelector("#sin_salida");			
			var conSalida = document.querySelector("#con_salida");
			var textoSalida = document.querySelector(".txt_salida");
			sinSalida.classList.add("invisible");
			conSalida.classList.remove("invisible");
			conSalida.classList.add("contenedor_salida");
			textArea.value = "";
			var textoDesencriptado = desencriptarTexto(texto);
			textoSalida.textContent = textoDesencriptado;
		}
	}
});

function desencriptarTexto(texto) {
	var textoDesencriptado = "";

	for(var i = 0; i < texto.length; i++) {
		var esClave = true;
		switch (texto[i]) {
			case 'a':
				var clave = texto[i] + texto[i+1];
				if(clave == "ai") {
					textoDesencriptado = textoDesencriptado + "a";
					i=i+1;
				} else {
					esClave = false;
				}
				break;
			case 'e':
				var clave = texto[i] + texto[i+1] + texto[i+2] + texto[i+3] + texto[i+4];
				if(clave == "enter") {
					textoDesencriptado = textoDesencriptado + "e";
					i=i+4;
				}else {
					esClave = false;
				}

				break;
			case 'i':
				var clave = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
				if(clave == "imes") {
					textoDesencriptado = textoDesencriptado + "i";
					i=i+3;
				}else {
					esClave = false;
				}
				break;
			case 'o':
				var clave = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
				if(clave == "ober") {
					textoDesencriptado = textoDesencriptado + "o";
					i=i+3;
				}else {
					esClave = false;
				}
				break;
			case 'u':
				var clave = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
				if(clave == "ufat") {
					textoDesencriptado = textoDesencriptado + "u";
					i=i+3;
				}else {
					esClave = false;
				}
				break;
			default:
					esClave = false; 
				break;
		}
		if(!esClave) {
			textoDesencriptado = textoDesencriptado + texto[i];
		}
	}

	return textoDesencriptado;
}