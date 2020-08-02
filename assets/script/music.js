import audio from './audio'
cc.Class({
    extends: cc.Component,

    properties: {
      btn_music: cc.Button,
      audio: cc.AudioClip,
      music_sprite: cc.Sprite
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      // cc.resources.load('sound/bgm',cc.AudioClip, (err, asset) => {
      //   this.audio = asset
      // })
    },

    start () {
      audio.play(this.audio)
      if (audio.isPlay) {
        this.music_sprite.node.active = true
      }else {
        this.music_sprite.node.active = false
      }
    },

    controlMusic() {
      audio.change()
      if (audio.isPlay) {
        this.music_sprite.node.active = true
      }else {
        this.music_sprite.node.active = false
      }
    }
    // update (dt) {},
});
