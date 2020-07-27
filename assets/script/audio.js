class Audio{
  constructor () {
    this.isPlay = false
    this.music
  }
  play(obj) {
    this.isPlay = true
    this.music = obj
    cc.audioEngine.playMusic(obj, true)
  }
  stop() {
    this.isPlay = false
    cc.audioEngine.stopMusic()
  }
  pause() {
    this.isPlay = false
    cc.audioEngine.pauseMusic()
  }
  resume() {
    this.isPlay = true
    cc.audioEngine.resumeMusic()
  }
  change(){
    if (this.isPlay) {
      this.pause()
    }else {
      this.resume()
    }
  }
}

const audio = new Audio()
export default audio
