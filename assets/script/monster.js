// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
      this.ai()
    },

    ai() {
      var d = 1.5
      if(this.node.x > 150) {
        var act1 = cc.moveTo(d, cc.v2(330, this.node.y))
      }else {
        var act1 = cc.moveTo(d, cc.v2(this.node.x + 150, this.node.y))
      }
      if (this.node.x > -200) {
        var act2 = cc.moveTo(d, cc.v2(this.node.x - 150, this.node.y))
      }else {
        var act2 = cc.moveTo(d, cc.v2(-330, this.node.y))
      }
      let seq = cc.sequence(act1, act2)
      let repeat = cc.repeatForever(seq)
      this.node.runAction(repeat)
    }
    // update (dt) {},
});
