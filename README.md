# easy-video-player ![https://www.npmjs.com/package/easy-video-player](https://img.shields.io/npm/v/easy-video-player.svg) ![https://github.com/shitouplus/easy-video-player](https://img.shields.io/badge/build-passing-brightgreen.svg)
>简单的h5播放器，压缩后仅38k，适合在移动端使用。

### 安装
1. npm

``` npm install easy-video-player ```
2. script

``` <script src="EasyVideoPlayer.umd.min.js"></script> ```

### 支持的属性
| 属性 | 说明 | 类型 | 默认值 |
| :-----| :-----| :-----| :----- |
| src | 视频地址 |String |  |
| sources | 视频来源 | Array |
| poster | 封面地址 | String | 
| autoPlay | 是否自动播放 | Boolean | false
| loop | 是否循环播放 | Boolean | false
| preload | 预加载 | auto/meta/none | auto
| watermark | 水印地址 | String |
| watermarkStyle | 水印样式 | Object |
| title | 视频标题 | String |

### 支持的事件
| 事件 | 说明 | 参数
| :---- | :---- | :----
| play | 播放 | video
| pause | 暂停| video
| end | 播放结束 | video
| load | 加载完成 | video
| seek | 快进 | video

### 其它
| 该组件使用vue-cli进行开发，配置了开发和构建命令
```
"dev": "vue serve src/index.js",
"build": "vue build -t lib -n EasyVideoPlayer -d dist src/index.js"
```
如果组建不符合你的需求可以自行使用dev命令二次开发，然后使用build命令打包





