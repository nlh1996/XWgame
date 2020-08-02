cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      // 开启物理系统
      cc.director.getPhysicsManager().enabled = true;
    },

    start () {

    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
      console.log(contact)
    },

    // update (dt) {},
});
