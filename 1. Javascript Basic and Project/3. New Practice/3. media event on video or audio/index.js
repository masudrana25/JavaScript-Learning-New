const video = document.querySelector('video');

video.addEventListener('canplay', () => {
  console.log('canplay');
});

video.addEventListener('play', () => {
  console.log('play');
});

video.addEventListener('pause', () => {
  console.log('pause');
});

video.addEventListener('playing', () => {
  console.log('playing');
});

video.addEventListener('ended', () => {
  console.log('Thanks for watching');
});

video.addEventListener('volumechange', () => {
  console.log('volume changed');
});