<template>
    <div :class="['player', {'player--full-screen': fullScreen}]">
        <img class="player__poster" v-show="poster && showCover" :src="poster" @load="loadCover = true"/>
        <video
            :class="['player__video', {'player__video--hidden': poster && !loadCover}]"
            ref="video"
            :src="src"
            :autoplay="autoplay"
            :loop="loop"
            :preload="preload"
            @ended="resetVideo"
            @click="touchVideo"
            @loadedmetadata.once="preparePlay"
            @error="errorHandler"
            @timeupdate="progressHandler">
            <source v-for="(item, index) in sources" :key="index" :src="item">
        </video>
        <div class="player__mask" v-show="status !== 'playing'" @click="touchMask"></div>
        <div class="player__btn-play" v-show="status === 'play'" @click="handlePlay" @click.once="hideCover"></div>
        <div class="player__btn-pause" v-show="status === 'pause'" @click="handlePause"></div>
        <div class="player__btn-loading" v-show="status === 'loading'"></div>
        <div class="player__error" v-show="status === 'error'">{{errMessage}}</div>
        <div class="player__header">
            <img v-if="watermark" :src="watermark" alt="" :class="['player__watermark', { watermarkStyle }]"/>
            <span class="palyer__title" v-if="title" v-show="status && status !== 'playing'">{{title}}</span>
        </div>
        <div class="player__controls" v-show="control && status !== 'playing'">
            <div class="player__timer">
                {{currentTime | formatTime}} / {{duration | formatTime}}
                <div class="player__progress-container" @click="handleSeek" ref="progress">
                    <div class="player__progress" :style="progress">
                        <i class="player__progress-btn" @mousedown="handleDragStart"></i>
                    </div>
                </div>
            </div>
            <div class="player__full-screen" @click="handleFullScreen"></div>
        </div>
    </div>
</template>

<script>
  function throttle (fn, interval = 1000) {
    let timer
    return function (...args) {
      fn.apply(this, args)

      if (timer) { return }

      timer = setTimeout(() => {
        timer = null
      }, interval)
    }
  }

  export default {
    name: 'EasyVideoPlayer',
    props: {
      src: String,
      watermark: String,
      watermarkStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      title: String,
      control: Boolean,
      sources: Array,
      autoplay: Boolean,
      loop: Boolean,
      preload: {
        type: String,
        default: 'auto',
        validator (val) {
          return val === 'auto' || val === 'meta' || val === 'none'
        }
      },
      poster: String
    },
    data () {
      return {
        // play: '可播放' pause: '暂停' playing: '播放中' loading: '加载中' error: '错误'
        status: 'loading',
        showCover: true,
        loadCover: false,
        loadVideo: false,
        timer: null,
        startTime: Date.now(),
        duration: 1,
        currentTime: 0,
        errMessage: '',
        fullScreen: false,
        enableDrag: false
      }
    },
    computed: {
      loaded () {
        if (!this.poster) {
          return this.loadVideo
        }
        return this.loadCover && this.loadVideo
      },
      progress () {
        return {
          width: (this.currentTime / this.duration) * 100 + '%'
        }
      }
    },
    mounted () {
      if (this.autoplay) {
        return this.status = 'playing'
      }

      // 避免加载动画闪烁
      this.timer = new Promise(res => {
        setTimeout(res, 400)
      })
    },
    methods: {
      preparePlay () {
        this.$emit('load', this.$refs.video)
        this.loadVideo = true
        this.duration = this.$refs.video.duration
      },
      hideCover () {
        this.showCover = false
      },
      handlePlay () {
        this.$refs.video.play()
        this.status = 'playing'
        this.$emit('play', this.$refs.video)
      },
      handlePause () {
        this.$emit('pause', this.$refs.video)
        this.$refs.video.pause()
        this.status = 'play'

        clearTimeout(this.timer)
        this.timer = null
      },
      resetVideo () {
        this.status = 'play'

        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }

        this.$emit('end', this.$refs.video)
      },
      touchVideo () {
        this.status = 'pause'
        this.timer = setTimeout(() => {
          this.status = 'playing'
        }, 2000)
      },
      touchMask () {
        if (this.timer && this.status === 'pause') {
          this.status = 'playing'
          clearTimeout(this.timer)
          this.timer = null
        }
      },
      errorHandler (err) {
        this.errMessage = err.message
        this.status = 'error'
      },
      progressHandler: throttle(function () {
        this.currentTime = this.$refs.video.currentTime
      }),
      handleSeek (e) {
        const seek = e.clientX - this.$refs.progress.clientLeft
        this.showCover = false
        this.currentTime = this.$refs.video.currentTime = seek / this.$refs.progress.clientWidth * this.duration
      },
      handleFullScreen () {
        this.fullScreen = !this.fullScreen
      },
      handleDragStart () {
        this.enableDrag = true
        document.addEventListener('mousemove', this.handleDrag)
        document.addEventListener('mouseup', this.handleDragEnd, { once: true })
      },
      handleDrag: throttle(function (e) {
        if (!this.enableDrag) { return }

        const clientWidth = this.$refs.progress.clientWidth
        const time = e.movementX / clientWidth * this.duration
        let currentTime = this.currentTime + time

        if (currentTime < 0) {
          currentTime = 0
        }

        if (currentTime > this.duration) {
          currentTime = this.duration
        }

        this.currentTime = this.$refs.video.currentTime = currentTime
      }),
      handleDragEnd () {
        this.enableDrag = false
        document.removeEventListener('mousemove', this.handleDrag)
        this.$emit('seek', this.$refs.video)
      }
    },
    filters: {
      formatTime (s) {
        s = Math.floor(s)

        let hour = Math.floor(s / (60 * 60))
        let min = Math.floor(s / 60) % 60
        let sec = s % 60

        if (hour < 10) { hour = '0' + hour }
        if (min < 10) { min = '0' + min }
        if (sec < 10) { sec = '0' + sec }

        if (hour > 0) {
          return hour + ':' + min + ':' + sec
        }

        return min + ':' + sec
      }
    },
    watch: {
      loaded (val) {
        if (val) {
          Promise.resolve(this.timer)
            .then(() => {
              this.status = 'play'
            })
        }
      }
    }
  }
</script>

<style scoped src="./css/index.css"></style>
