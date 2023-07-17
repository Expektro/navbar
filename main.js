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
      link.style.animaton
        ? (link.style.animaton = "")
        : (link.style.animaton = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.7
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
