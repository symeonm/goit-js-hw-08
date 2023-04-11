import Vimeo  from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";



player.on('timeupdate', throttle ((data) => {
localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)}, 1000))
    

const getSecond = localStorage.getItem(LOCALSTORAGE_KEY);
const value = JSON.parse(getSecond);


player.setCurrentTime(value);
