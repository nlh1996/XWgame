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

    },

    // ai() {
    //   var d = 1.5
    //   if(this.node.x > 150) {
    //     var act1 = cc.moveTo(d, cc.v2(330, this.node.y))
    //   }else {
    //     var act1 = cc.moveTo(d, cc.v2(this.node.x + 150, this.node.y))
    //   }
    //   if (this.node.x > -200) {
    //     var act2 = cc.moveTo(d, cc.v2(this.node.x - 150, this.node.y))
    //   }else {
    //     var act2 = cc.moveTo(d, cc.v2(-330, this.node.y))
    //   }
    //   let seq = cc.sequence(act1, act2)
    //   let repeat = cc.repeatForever(seq)
    //   this.node.runAction(repeat)
    // }
    // update (dt) {},
    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
      console.log(11111)
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
    }
});
