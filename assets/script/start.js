cc.Class({
    extends: cc.Component,

    properties: {
      btn_start: cc.Button,
      btn_about: cc.Button,
      btn_paihang: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },

    startGame() {
      cc.director.loadScene("main")
    },

    // update (dt) {},
});
