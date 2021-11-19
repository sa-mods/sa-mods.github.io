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
	window.alert("MIT License

Copyright (c) 2021 sa-mods

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.");
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
