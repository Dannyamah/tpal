const className = "inverted";
const scrollTrigger = 60;
const navBar = document.querySelector(".navbar");

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    navBar.classList.add(className);
  } else {
    navBar.classList.remove(className);
  }
};

const copy = document.querySelector('.action-btn.copy')

copy.addEventListener('click', () => {
  copy.innerHTML = 'Copied'
})
