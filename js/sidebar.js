var mobileMenu = document.getElementById('Mobile-menu')
var menu = document.getElementById('Menu')

mobileMenu.addEventListener("click", function(){
	menu.classList.toggle('open')
})
function home(){
        menu.classList.toggle('open')
	window.open("index.html");
}

function about(){
        menu.classList.toggle('open')
	window.open("about.html");
}

function about_developer(){
        menu.classList.toggle('open')
	window.open("about_developer.html"); 
}

function contact(){
        menu.classList.toggle('open')
	window.open("contato.html");
}

class MobileNavbar {
  constructor(mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.activeClass = "active";

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
