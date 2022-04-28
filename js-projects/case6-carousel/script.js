;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement
      this.itemClassName = 'carousel_item'
      this.items = document.querySelectorAll('.carousel_item')
      this.totalItems = this.items.length
      this.current = 0
    }

    initCarousel() {
      this.items[this.items - 1].classList.add('prev')
      this.items[0].classList.add('active')
      this.items[1].classList.add('next')
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const carouselElement = get('.carousel')
    const carousel = carousel(carouselElement)
  })
})()
