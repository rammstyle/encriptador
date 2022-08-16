function encriptar (){
    let texto = document.querySelector("#input1").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input1").value;
}

    let boton1 = document.querySelector("#boton-encriptar"); boton1.onclick = encriptar;

    function desencriptar (){ var texto = document.querySelector("#input1").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input1").value;

}

    let boton2 = document.querySelector("#boton-desencriptar"); boton2.onclick = desencriptar;


function copiar (){
    let copyText = document.getElementById("msg");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Usted copió el texto " + copyText.value);

}