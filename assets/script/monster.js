import data from './data'
cc.Class({
    extends: cc.Component,

    properties: {
        downSpead: 0,
        hp: 0,
        label: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
      switch(this.node.id) {
        case 1:
          this.hp = 2
          this.label.string = this.hp
          break
        case 2:
          let s = data.score + 1
          this.hp = Math.floor(Math.random()*s) + 1
          this.label.string = this.hp
          break
        case 3:
      }
    },

    update(dt) {
        this.node.y -= this.downSpead
        if (this.node.y < -600 ) {
          if (this.node.id == 2) {
            cc.director.emit('hurt')
          }
          this.node.destroy()
        }
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function(contact, selfCollider, otherCollider) {
      if(this.node.id == 3) {
        cc.director.emit('buf')
        this.node.destroy()
        return
      }

      this.hp--
      this.label.string = this.hp
      if (this.hp <= 0) {
        if (this.node.id == 2) {
          cc.director.emit('score')
        }
        this.node.destroy()
      }
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function(contact, selfCollider, otherCollider) {},

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function(contact, selfCollider, otherCollider) {},

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function(contact, selfCollider, otherCollider) {}
});