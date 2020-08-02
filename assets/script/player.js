cc.Class({
  extends: cc.Component,

  properties: {
    ball: cc.Prefab,
    view: cc.Node,
    num: 0,
    speed: 0,
    arrow: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.ballPool = new cc.NodePool('ballPool')
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
  },

  touchMove(et) {
    let d = et.touch.getLocation().x - et.touch.getStartLocation().x
    if (d > 0 && this.arrow.angle > 0) {
      this.arrow.angle -= d/5
      if (this.arrow.angle < 0) {
        this.arrow.angle = 0
      }
    }
    if (d < 0 && this.arrow.angle <= 180) {
      this.arrow.angle -= d/5
      if (this.arrow.angle > 180) {
        this.arrow.angle = 180
      }
    }
  },

  start() {
    let newNode = cc.instantiate(this.ball);
    newNode.x = this.node.x + 40
    newNode.y = this.node.y + 30
    this.view.addChild(newNode)
    let rb = newNode.getComponent(cc.RigidBody)
    rb.linearVelocity = cc.v2(100, 100)
  },
  
  update() {

  }
});
