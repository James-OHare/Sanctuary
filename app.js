let iconState = 'play';
 
async function initPlayPauseIcon() {
  const imgEl = document.getElementById('play-icon');
  const response = await fetch(imgEl.getAttribute('src'));
  const svgMarkup = await response.text();
 
  const wrapper = document.createElement('div');
  wrapper.innerHTML = svgMarkup.trim();
  const svgEl = wrapper.firstElementChild;
 
  svgEl.classList.add('play-pause-icon');
 
  imgEl.replaceWith(svgEl);
}
 
function setPlayPauseIcon(newState) {
  if (newState === iconState) return;
 
  const svg = document.querySelector('#play-pause .play-pause-icon');
  if (!svg) return;
 
  const toPause1 = svg.querySelector('#toPause1');
  const toPause2 = svg.querySelector('#toPause2');
  const toPlay1  = svg.querySelector('#toPlay1');
  const toPlay2  = svg.querySelector('#toPlay2');
 
  if (newState === 'pause') {
    toPause1.beginElement();
    toPause2.beginElement();
  } else {
    toPlay1.beginElement();
    toPlay2.beginElement();
  }
  iconState = newState;
}

document.addEventListener('DOMContentLoaded', async () => {
  await initPlayPauseIcon();
 
  const playPauseBtn = document.getElementById('play-pause');
  let isPlaying = false;
 
  playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    setPlayPauseIcon(isPlaying ? 'pause' : 'play');

  });
});