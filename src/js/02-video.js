import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playerCurrentTime = localStorage.getItem('videoplayer-current-time');

if (playerCurrentTime) {
  player.setCurrentTime(playerCurrentTime);
}

let setVideoCurrentTime = throttle(currentTime => {
  console.log('player time', currentTime);
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  setVideoCurrentTime(data.seconds);
});
