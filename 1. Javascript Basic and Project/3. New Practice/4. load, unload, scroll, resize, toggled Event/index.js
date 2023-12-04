



window.addEventListener("load", () => {
  console.log('Loaded');
});

window.addEventListener("unload", () => {
  console.log('unload');
});

window.addEventListener("scroll", () => {
  console.log('scroll');
});

window.addEventListener("resize", () => {
  const height = window.outerHeight;
  const width = window.outerWidth;
  console.log('height', height, 'width', width);
});

document.querySelector('details').addEventListener('toggle', (e) => {
  if (e.target.open) {
    console.log('toggle is open');
  }
  else {
    console.log('toggle is close');
  }
})