import pool from './pool'
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
    this.init()
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
  },

  init() {
    this.index = 0
    this.dir = {}
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

  },
  
  computeDir() {
    let react = this.arrow.getBoundingBox()
    this.dir.x = (react.xMin + react.xMax) * 2
    this.dir.y = (react.yMin + react.yMax) * 2
  },

  update() {
    d = 240/this.num
    this.index ++
    if (this.index >= d) {
      let node = null
      this.index = 0
      if (pool.ballPool.size() > 0) {
        node = pool.ballPool.get()
      }else {
        node = cc.instantiate(this.ball)
        pool.ballPool.put(node)
      }
      node.x = this.node.x + 40
      node.y = this.node.y + 30
      this.view.addChild(node)
      let rb = node.getComponent(cc.RigidBody)
      this.computeDir()
      rb.linearVelocity = cc.v2(this.dir.x, this.dir.y)
    }
  }
});
