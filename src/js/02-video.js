import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playerCurrentTime = localStorage.getItem("videoplayer-current-time");

console.log('time start', localStorage.getItem("videoplayer-current-time"));

if (playerCurrentTime) {
    player.setCurrentTime(playerCurrentTime);
}

let setCurrentTime = throttle((currentTime) => {
    console.log('player time', currentTime);
    localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);

player.on('timeupdate', function (data) {
    setCurrentTime(data.seconds);
});
