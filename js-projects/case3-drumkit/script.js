;(function () {
  'use strict'

  const get = function (target) {
    return document.querySelector(target)
  }

  const getAll = function (target) {
    return document.querySelectorAll(target)
  }

  const keys = Array.from(getAll('.key'))
  const soundsRoot = 'assets/sounds/'
  const drumSounds = [
    { key: 81, sound: 'clap.wav' },
    { key: 87, sound: 'crash.wav' },
    { key: 69, sound: 'hihat.wav' },
    { key: 65, sound: 'kick.wav' },
    { key: 83, sound: 'openhat.wav' },
    { key: 68, sound: 'ride.wav' },
    { key: 90, sound: 'shaker.wav' },
    { key: 88, sound: 'snare.wav' },
    { key: 67, sound: 'tom.wav' },
  ]

  const getAudioElement = (idx) => {
    const audio = document.createElement('audio')
    audio.dataset.key = drumSounds[idx].key
    audio.src = soundsRoot + drumSounds[idx].sound
    return audio
  }

  const onKeydown = (e) => {
    const keycode = e.which
    // const keycode = e.keycode
    playsound(keycode)
  }

  const onMousedown = (e) => {
    const keycode = e.target.dataset.key
    playsound(keycode)
  }

  const playsound = (keycode) => {
    const $audio = get(`audio[data-key="${keycode}"`)
    const $key = get(`div[data-key="${keycode}"`)
    if ($key && $audio) {
      $key.classList.add('playing')
      $audio.currentTime = 0
      $audio.play()
    }
  }

  const onTransitionEnd = (e) => {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing')
    }
  }
  const init = () => {
    window.addEventListener('keydown', onKeydown)
    keys.forEach((key, idx) => {
      key.dataset.key = drumSounds[idx].key
      const audio = getAudioElement(idx)
      key.appendChild(audio)
      key.addEventListener('click', onMousedown)
      key.addEventListener('transitionend', onTransitionEnd)
    })
  }
  init()
})()
