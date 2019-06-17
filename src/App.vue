<template>
    <div class="player">
        <video :src="src"></video>
        <div class="player__watermark" v-if="watermark">{{watermark}}</div>
        <div class="palyer__title" v-if="title" v-show="status">{{title}}</div>
    </div>
</template>

<script>
    export default {
      name: 'EasyVideoPlayer',
      props: {
        src: String,
        watermark: [String, Number],
        title: [String, Number]
      },
      data () {
        return {
          status: ''
        }
      }
    }
</script>

<style scoped src="./css/index.css"></style>
