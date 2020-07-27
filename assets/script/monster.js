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
      let act1 = cc.moveTo(1.5, cc.v2(this.node.x+200, this.node.y))
      let act2 = cc.moveTo(1.5, cc.v2(this.node.x-200, this.node.y))
      let seq = cc.sequence(act1, act2)
      let repeat = cc.repeatForever(seq)
      this.node.runAction(repeat)
    },

    // update (dt) {},
});
