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

var contatos = document.querySelector(".Contatos");
var d_contatos = document.querySelector(".D-contatos");
contatos.addEventListener("mouseenter", () => {
  if (contatos.classList.contains("aleat")) {
    contatos.classList.add("hovado");
    contatos.classList.remove("aleat");
    d_contatos.classList.remove("hide");
    d_contatos.classList.add("hovado");
  } else {
    contatos.classList.remove("hovado");
    contatos.classList.add("aleat");
    d_contatos.classList.remove("hovado");
    d_contatos.classList.add("hide");
  }
});
contatos.addEventListener("mouseout", () => {
  if (contatos.classList.contains("aleat")) {
    contatos.classList.add("hovado");
    contatos.classList.remove("aleat");
    d_contatos.classList.remove("hide");
    d_contatos.classList.add("hovado");
  } else {
    contatos.classList.remove("hovado");
    contatos.classList.add("aleat");
    d_contatos.classList.remove("hovado");
    d_contatos.classList.add("hide");
  }
});
