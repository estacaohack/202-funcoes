function ocultarImagens(seletor){
	let imagens = document.querySelectorAll(seletor);

	for(let umaImagem of imagens){
		// umaImagem.style.transform = 'scale(1.5,1.5)';
		umaImagem.style.opacity = '0';
	}	
}


