import data from './data'

cc.Class({
    extends: cc.Component,

    properties: {
      mst1: cc.Prefab,
      mst2: cc.Prefab,
      mst3: cc.Prefab,
      view: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      // 开启物理系统
      cc.director.getPhysicsManager().enabled = true;
    },

    start () {
      this.index = 0
      this.time = 0
      this.msts = [this.mst1,this.mst2,this.mst3]
    },

    createMst(index) {
      let node = cc.instantiate(this.msts[index])
      node.x = -200 + 200*Math.floor(Math.random()*3)
      node.y = 600
      node.id = index + 1
      this.view.addChild(node)
    },

    update (dt) {
      this.index ++ 
      this.time ++
      if (this.index >= 120) {
        this.index = 0
        if(this.time >= 800) {
          this.time = 0
          this.createMst(Math.floor(2))
        }
        this.createMst(Math.floor(Math.random()*2))
      }
    },
});
