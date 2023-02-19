// imprint page
const imprintButton = document.getElementById(`imprint`);

// scroll to top if user click imprint (and he is on the imprint page)
imprintButton;
imprintButton.addEventListener(`click`, () => {
  pageScroll();
});
// scroll function
function pageScroll() {
  window.scrollTo(0, 0);
}

// change background and hide elements when user click home
const goHome = document.getElementById(`goHome`);
const mainContent = document.querySelectorAll(` section *`);
const html = document.querySelector(`html`);

goHome.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `var(--background)`;
  mainContent.forEach((s) => (s.style.opacity = `0`));
  html.style.backgroundColor = `var(--background)`;
  // change location to next page
  setTimeout(() => {
    location.href = `/`;
  }, 500);
});
