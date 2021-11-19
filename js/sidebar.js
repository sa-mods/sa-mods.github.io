var mobileMenu = document.getElementById('Mobile-menu');
var menu = document.getElementById('Menu');

mobileMenu.addEventListener("click", function(){
	menu.classList.toggle('open');
})
//cabeçalho
function home(){
	mobileMenu.click()
	window.open("index.html");
}

function about(){
	mobileMenu.click()
	window.open("about.html");
}

function about_developer(){
	mobileMenu.click()
	window.open("developer.html"); 
}

function contact(){
	mobileMenu.click()
	window.open("contato.html");
}
//rodapé
function privacy_policy(){
	window.open("privacy_policy.html");
}

function terms(){
	window.open("terms.html");
}

function license(){
	window.alert(`
 Licença MIT

 Copyright (c) 2021 sa-mods

 A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia
 deste software e arquivos de documentação associados (o "Software"), para lidar
 no Software sem restrição, incluindo, sem limitação, os direitos
 para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e / ou vender
 cópias do Software, e para permitir que as pessoas a quem o Software é
 fornecido para fazê-lo, sujeito às seguintes condições:

 O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todos
 cópias ou partes substanciais do Software.

 O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
 IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
 ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO.  EM NENHUMA HIPÓTESE O
 AUTORES OU TITULARES DE DIREITOS AUTORAIS SÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTROS
 RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE,
 FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
 PROGRAMAS.`);
}

class MobileNavbar {
  constructor(mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
);
mobileNavbar.init();
