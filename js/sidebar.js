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
	window.alert("license");
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
