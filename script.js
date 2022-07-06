
	function animate(elemento) {
	    let larguraElemento = elemento.offsetWidth; //retorna a largura de um elemento no layout
	    let larguraPai = elemento.parentElement.offsetWidth;
	    let contador = 0;
	    setInterval(() => {
	        elemento.style.marginLeft = --contador + "px";
	        if (larguraElemento == -contador) {
	            contador = larguraPai;
        	}
    }, 20);
}

let para = document.getElementsByClassName("para");

	for (let value of para){
		animate(value);
	}

/* 
Outra soluçao que funciona mas com erro no SonarLint Rule:
	for(var i = 0; i < para.length; i++){
		animate(para[i]);
	}
*/

// https://www.youtube.com/watch?v=bHRXRYTppHM