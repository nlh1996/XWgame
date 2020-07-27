import audio from './audio'
cc.Class({
    extends: cc.Component,

    properties: {
      btn_music: cc.Button,
      audio: cc.AudioClip
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      
    },

    start () {
      audio.play(this.audio)
    },

    controlMusic() {
      audio.change()
    }
    // update (dt) {},
});
