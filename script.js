let subtitulo = document.getElementById("sub");
animate(subtitulo);

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

// https://pt.stackoverflow.com/questions/104181/remover-css-de-elemento
// https://pt.stackoverflow.com/questions/14639/ignorar-css-em-determinado-trecho-da-p%C3%A1gina

// https://www.youtube.com/watch?v=bHRXRYTppHM