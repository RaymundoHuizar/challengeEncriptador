document.getElementById("encriptarBtn").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;

    if (!validarTexto(text)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let encryptedText = encriptar(text);
    let outputMessage = document.getElementById("outputMessage");
    let outputImage = document.getElementById("outputImage");

    outputMessage.textContent = encryptedText;
    outputImage.style.display = "none"; 
    outputMessage.style.display = "block"; 
});

document.getElementById("desencriptarBtn").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;

    if (!validarTexto(text)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let decryptedText = desencriptar(text);
    let outputMessage = document.getElementById("outputMessage");
    let outputImage = document.getElementById("outputImage");

    outputMessage.textContent = decryptedText;
    outputImage.style.display = "none"; 
    outputMessage.style.display = "block"; 
});

document.getElementById("copiarBtn").addEventListener("click", function() {
    let outputMessage = document.getElementById("outputMessage").textContent;
    navigator.clipboard.writeText(outputMessage).then(() => {
        alert("Texto copiado al portapapeles");

        
        document.getElementById("outputMessage").textContent = "Ningún mensaje fue encontrado";
        document.getElementById("outputImage").style.display = "block"; 
    });
});

function validarTexto(text) {
    let regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encriptar(text) {
    let encriptaciones = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    return text.replace(/[eioua]/g, match => encriptaciones[match]);
}

function desencriptar(text) {
    let desencriptaciones = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => desencriptaciones[match]);
}
