// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
import data from './data'

cc.Class({
    extends: cc.Component,

    properties: {
      score: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.score.string = data.score
    },

    start () {

    },

    restart() {
      data.score = 0
      data.life = 3
      cc.director.loadScene("main")
    }
    // update (dt) {},
});
