;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const $progressBar = get('.progress-bar')

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const widthScroll = (scrollTop / height) * 100
    $progressBar.style.width = widthScroll + '%'
  }

  window.addEventListener('scroll', onScroll)
})()
