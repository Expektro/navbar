class MobileNavbar {
  constructor(mobileMenu, navList, NavLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.NavLinks = document.querySelectorAll(NavLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }
  animateLinks() {
    this.NavLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
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
  ".menu-mobile",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//menu contatos//

var contatos = document.querySelector(".Contatos");
var d_contatos = document.querySelector(".D-contatos");

function menuContatos() {
  contatos.classList.toggle("hovado");
  d_contatos.classList.toggle("hide");
  d_contatos.classList.toggle("hovado");
}
contatos.addEventListener("mouseenter", menuContatos);
contatos.addEventListener("mouseout", menuContatos);
d_contatos.addEventListener("mouseenter", menuContatos);
d_contatos.addEventListener("mouseleave", menuContatos);

//menu generos//

var generos = document.querySelector(".Generos");
var d_generos = document.querySelector(".D-generos");

function menuGeneros() {
  generos.classList.toggle("hovado");
  d_generos.classList.toggle("hide");
  d_generos.classList.toggle("hovado");
}
generos.addEventListener("mouseenter", menuGeneros);
generos.addEventListener("mouseout", menuGeneros);
d_generos.addEventListener("mouseenter", menuGeneros);
d_generos.addEventListener("mouseleave", menuGeneros);
