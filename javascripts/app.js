var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
	var menu = document.querySelector('.js-menu');
	var entrada = menu.classList.toggle('menu--exibindo');
}