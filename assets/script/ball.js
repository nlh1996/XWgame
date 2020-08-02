import pool from './pool'
cc.Class({
  extends: cc.Component,

  properties: {
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start () {

  },

  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact: function (contact, selfCollider, otherCollider) {
  },

  // 只在两个碰撞体结束接触时被调用一次
  onEndContact: function (contact, selfCollider, otherCollider) {
  },

  // 每次将要处理碰撞体接触逻辑时被调用
  onPreSolve: function (contact, selfCollider, otherCollider) {
  },

  // 每次处理完碰撞体接触逻辑时被调用
  onPostSolve: function (contact, selfCollider, otherCollider) {
  },

  update (dt) {
    if (this.node.y < -600) {
      pool.ballPool.put(this.node)
      console.log("我回收了")
    }
  },
});