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
      this.msts = [this.mst1,this.mst2,this.mst3]
    },

    createMst(index) {
      let node = cc.instantiate(this.msts[index])
      node.x = -200 + 200*Math.floor(Math.random()*3)
      node.y = 550
      node.id = index + 1
      this.view.addChild(node)
    },

    update (dt) {
      this.index ++ 
      if (this.index >= 120) {
        this.index = 0
        this.createMst(Math.floor(Math.random()*2))
      }
    },
});
