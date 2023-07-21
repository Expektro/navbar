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
d_contatos.addEventListener("mouseenter", () => {
  if (d_contatos.classList.contains("hide")) {
    d_contatos.classList.remove("hide");
    d_contatos.classList.add("hovado");
  }
});

d_contatos.addEventListener("mouseleave", () => {
  if (d_contatos.classList.contains("hovado")) {
    d_contatos.classList.remove("hovado");
    d_contatos.classList.add("hide");
  }
});
//menu generos
var generos = document.querySelector(".Generos");
var d_generos = document.querySelector(".D-generos");
generos.addEventListener("mouseenter", () => {
  if (generos.classList.contains("aleat")) {
    generos.classList.add("hovado");
    generos.classList.remove("aleat");
    d_generos.classList.remove("hide");
    d_generos.classList.add("hovado");
  } else {
    generos.classList.remove("hovado");
    generos.classList.add("aleat");
    d_generos.classList.remove("hovado");
    d_generos.classList.add("hide");
  }
});
generos.addEventListener("mouseout", () => {
  if (generos.classList.contains("aleat")) {
    generos.classList.add("hovado");
    generos.classList.remove("aleat");
    d_generos.classList.remove("hide");
    d_generos.classList.add("hovado");
  } else {
    generos.classList.remove("hovado");
    generos.classList.add("aleat");
    d_generos.classList.remove("hovado");
    d_generos.classList.add("hide");
  }
});
d_generos.addEventListener("mouseenter", () => {
  if (d_generos.classList.contains("hide")) {
    d_generos.classList.remove("hide");
    d_generos.classList.add("hovado");
  }
});

d_generos.addEventListener("mouseleave", () => {
  if (d_generos.classList.contains("hovado")) {
    d_generos.classList.remove("hovado");
    d_generos.classList.add("hide");
  }
});
