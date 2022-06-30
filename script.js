let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
	animate(sub1);
	animate(sub2);

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