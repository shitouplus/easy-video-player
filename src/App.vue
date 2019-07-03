<template>
    <div class="player">
        <img class="player__poster" v-show="poster && showCover" :src="poster" @load="loadCover = true"/>
        <video
            :class="['player__video', {'player__video--hidden': !loadCover}]"
            ref="video"
            :src="src"
            :autoplay="autoplay"
            :loop="loop"
            :preload="preload"
            @ended="resetVideo"
            @click="touchVideo"
            @canplay.once="loadVideo = true"
            @error="errorHandler"
            @timeupdate="progressHandler">
            <source v-for="(item, index) in sources" :key="index" :src="item">
        </video>
        <div class="player__mask" v-show="status !== 'playing'" @click="touchMask"></div>
        <div class="player__btn-play" v-show="status === 'play'" @click="handlePlay" @click.once="hideCover"></div>
        <div class="player__btn-pause" v-show="status === 'pause'" @click="handlePause"></div>
        <div class="player__btn-loading" v-show="status === 'loading'"></div>
        <div class="player__watermark" v-if="watermark">{{watermark}}</div>
        <div class="palyer__title" v-if="title" v-show="status">{{title}}</div>
        <div class="player__controls">

        </div>
    </div>
</template>

<script>
  export default {
    name: 'EasyVideoPlayer',
    props: {
      src: String,
      watermark: String,
      title: String,
      control: Boolean,
      sources: Array,
      autoplay: Boolean,
      loop: Boolean,
      preload: {
        type: String,
        default: 'auto',
        validator (val) {
          return val === 'auto' || val === 'mete' || val === 'none'
        }
      },
      poster: String
    },
    data () {
      return {
        // play: '可播放' pause: '暂停' playing: '播放中' loading: '加载中'
        status: 'loading',
        showCover: true,
        loadCover: false,
        loadVideo: false,
        timer: null,
        startTime: Date.now()
      }
    },
    computed: {
      loaded () {
        return this.loadCover && this.loadVideo
      }
    },
    mounted () {
      // 避免加载动画闪烁
      this.timer = new Promise(res => {
        setTimeout(res, 400)
      })
    },
    methods: {
      hideCover () {
        this.showCover = false
      },
      handlePlay () {
        this.$refs.video.play()
        this.status = 'playing'
      },
      handlePause () {
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
      errorHandler () {},
      progressHandler () {}
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
