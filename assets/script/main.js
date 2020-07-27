cc.Class({
    extends: cc.Component,

    properties: {
      collider: cc.CircleCollider,
      boxCollider: cc.BoxCollider
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      // 开启碰撞检测
      var manager = cc.director.getCollisionManager()
      manager.enabled = true

      // debug绘制
      manager.enabledDebugDraw = true
      //manager.enabledDrawBoundingBox = true
    },

    start () {
      this.collider.node.on(cc.Node.EventType.TOUCH_MOVE, (et) => {
        // 返回世界坐标
        let x = et.getLocationX() - 350
        let y = et.getLocationY() - 667

        this.collider.node.x = x
        this.collider.node.y = y
      })
    },

    // update (dt) {},
});
