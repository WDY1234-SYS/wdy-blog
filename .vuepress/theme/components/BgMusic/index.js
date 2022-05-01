const { resolve } = require('path')

module.exports = (options, context) => ({
  define() {
    const { position, audios, autoplay, autoShrink, shrinkMode, floatPosition, floatStyle } = options
    return {
      POSITION: position || {
        left: '10px',
        bottom: '10px',
        'z-index': '999999'
      },
      AUDIOS: [
        // // 本地文件示例
        // {
        //   name: '장가갈 수 있을까',
        //   artist: '咖啡少年',
        //   url: '/bgm/1.mp3',
        //   cover: '/bgm/1.jpg'
        // },
        // 网络文件示例
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ],
      AUTOPLAY: autoplay || false, // 是否开启自动播放
      AUTO_SHRINK: autoShrink || false, // 是否默认收缩
      SHRINK_MODE: shrinkMode || 'float',
      FLOAT_POSITION: floatPosition || 'left',
      FLOAT_STYLE: floatStyle || {
        bottom: '200px',
        'z-index': '999999'
      }
    }
  },
  name: '@vuepress-reco/vuepress-plugin-bgm-player',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'BgMusic'
})
