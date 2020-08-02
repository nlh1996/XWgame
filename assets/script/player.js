import pool from './pool'
import data from './data'
cc.Class({
  extends: cc.Component,

  properties: {
    ball: cc.Prefab,
    view: cc.Node,
    speed: 0,
    arrow: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.init()
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this)
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this)
  },

  init() {
    this.index = 0
    this.dir = {}
    for (let i = 0; i < 30; i++) {
      let node = cc.instantiate(this.ball); // 创建节点
      pool.ballPool.put(node) // 通过 put 接口放入对象池
    }
  },

  touchStart() {

  },
  
  touchMove(et) {
    let d = et.touch.getLocation().x - et.touch.getStartLocation().x
    if (d > 0 && this.arrow.angle > 0) {
      this.arrow.angle -= d/8
      if (this.arrow.angle < 0) {
        this.arrow.angle = 0
      }
    }
    if (d < 0 && this.arrow.angle <= 180) {
      this.arrow.angle -= d/8
      if (this.arrow.angle > 180) {
        this.arrow.angle = 180
      }
    }
  },

  start() {

  },
  
  computeDir() {
    let react = this.arrow.getBoundingBox()
    this.dir.x = (react.xMin + react.xMax) * 4
    this.dir.y = (react.yMin + react.yMax) * 4
  },

  createball() {
    let node = null
    if (pool.ballPool.size() > 0) {
      node = pool.ballPool.get()
    }else {
      node = cc.instantiate(this.ball)
    }
    node.x = this.node.x + 40
    node.y = this.node.y + 30
    this.view.addChild(node)
    let rb = node.getComponent(cc.RigidBody)
    this.computeDir()
    rb.linearVelocity = cc.v2(this.dir.x, this.dir.y)
  },

  update() {
    let d = 240/data.max_ball
    this.index ++
    if (this.index >= d) {
      this.index = 0
      this.createball()
    }
  }
});
