import EasyVideoPlayer from './App'

EasyVideoPlayer.install = Vue => Vue.component('easy-video-player', EasyVideoPlayer)

if (window) {
  window.EasyVideoPlayer = EasyVideoPlayer
}

export default EasyVideoPlayer
