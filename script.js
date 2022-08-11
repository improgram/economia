
	function animate(elemento) {
	    let larguraElemento = elemento.offsetWidth; //retorna a largura de um elemento no layout
	    let larguraPai = elemento.parentElement.offsetWidth;
	    let contador = 0;
	    setInterval(() => {
	        elemento.style.marginLeft = --contador + "px";
	        if (larguraElemento == -contador) {
	            contador = larguraPai;
        	}
    }, 15);
}

let para = document.getElementsByClassName("para");

	for (let value of para){
		animate(value);
	}
