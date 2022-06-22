	function animate(element) {
	    let elementWidth = element.offsetWidth;
	    let parentWidth = element.parentElement.offsetWidth;
	    let contador = 0;
	    setInterval(() => {
	        element.style.marginLeft = --contador + "px";
	        if (elementWidth == -contador) {
	            contador = parentWidth;
        	}
    }, 20);
}

let subtitulo = document.getElementById("sub");
	animate(subtitulo);
