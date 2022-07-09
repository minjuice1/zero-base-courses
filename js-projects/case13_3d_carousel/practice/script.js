;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const getAll = (target) => {
    return document.querySelectorAll(target)
  }

  const carousel = get('.carousel')
  const $item = getAll('.item')
  const cellCount = $item.length
  let selectedIndex = 0

  const rotateCarousel = () => {
    const angle = (selectedIndex / cellCount) * -360
    carousel.style.transform = 'translateZ(-346px) rotateY(' + angle + 'deg)'
  }

  const prevButton = get('.prev_button')
  prevButton.addEventListener('click', () => {
    selectedIndex--
    rotateCarousel()
  })

  const nextButton = get('.next_button')
  nextButton.addEventListener('click', () => {
    selectedIndex++
    rotateCarousel()
  })
})()
