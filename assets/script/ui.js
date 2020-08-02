import data from './data'

cc.Class({
    extends: cc.Component,

    properties: {
      lab_score: cc.Label,
      lab_life: cc.Label,
      lab_ballNum: cc.Label,
      ballNum: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      data.max_ball = this.ballNum
      this.lab_ballNum.string = data.max_ball
      cc.director.on('score', ()=>{
        data.score += 1
        this.lab_score.string = data.score
      })
      cc.director.on('hurt', ()=>{
        data.life -= 1
        this.lab_life.string = data.life
        if (data.life == 0) {
          cc.director.loadScene("gameover")
        }
      })
      cc.director.on('buf', ()=>{
        data.max_ball += 1
        this.lab_ballNum.string = data.max_ball
      })
    },

    onDestroy() {
      cc.director.off('score')
      cc.director.off('hurt')
      cc.director.off('buf')
    },

    start () {

    },

    // update (dt) {},
});
