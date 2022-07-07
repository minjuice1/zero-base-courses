;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }
  class Stopwatch {
    constructor(element) {
      this.timer = element
      this.defaultTime = '00:00.00'
      this.startTime = 0
      this.elapsedTime = 0
      this.interval = null
    }

    addZero(nums) {
      if (nums < 10) {
        return '0' + nums
      } else if (nums > 100) {
        return nums.toString().slice(0, -1)
      }
      return nums
    }

    print(text) {
      this.timer.innerHTML = text
    }

    timeToString(time) {
      const date = new Date(time)
      const minutes = date.getUTCMinutes()
      const seconds = date.getUTCSeconds()
      const milliseconds = date.getUTCMilliseconds()
      return `${this.addZero(minutes)}:${this.addZero(seconds)}:${this.addZero(
        milliseconds
      )}`
    }

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime
      const time = this.timeToString(this.elapsedTime)
      this.print(time)
    }

    start() {
      clearInterval(this.interval)
      this.startTime = Date.now() - this.elapsedTime
      this.interval = setInterval(this.startTimer.bind(this), 10)
    }

    stop() {
      clearInterval(this.interval)
    }

    reset() {
      clearInterval(this.interval)
      this.print(this.defaultTime)
      this.startTime = 0
      this.elapsedTime = 0
      this.interval = null
    }
  }

  const $timer = get('.timer')
  const $startBtn = get('.timer_button.start')
  const $stopBtn = get('.timer_button.stop')
  const $resetBtn = get('.timer_button.reset')
  const stopwatch = new Stopwatch($timer)

  $startBtn.addEventListener('click', () => {
    stopwatch.start()
  })

  $stopBtn.addEventListener('click', () => {
    stopwatch.stop()
  })

  $resetBtn.addEventListener('click', () => {
    stopwatch.reset()
  })
})()
