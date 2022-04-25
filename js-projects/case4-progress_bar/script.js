;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  let timerId
  const $progress_bar = get('.progress-bar')

  const throttle = (callback, time) => {
    if (timerId) return

    timerId = setTimeout(() => {
      callback()
      timerId = undefined
    }, time)
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollWidth = (scrollTop / height) * 100
    $progress_bar.style.width = scrollWidth + '%'
  }

  window.addEventListener('scroll', () => {
    throttle(onScroll, 100)
  })
})()
