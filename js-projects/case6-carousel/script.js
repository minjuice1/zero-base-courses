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
      this.isMoving = false
    }

    disableInteraction() {
      this.isMoving = true
      setTimeout(() => {
        this.isMoving = false
      }, 1000)
    }

    moveCarousel() {
      if (this.isMoving) return
      this.disableInteraction()

      let prev = this.current - 1
      let next = this.current + 1

      if (this.current === 0) {
        prev = this.totalItems - 1
      } else if (this.current === this.totalItems - 1) {
        next = 0
      }

      for (let i = 0; i < this.totalItems; i++) {
        if (i === this.current) {
          this.items[i].className = this.itemClassName + ' active'
        } else if (i === prev) {
          this.items[i].className = this.itemClassName + ' prev'
        } else if (i === next) {
          this.items[i].className = this.itemClassName + ' next'
        } else {
          this.items[i].className = this.itemClassName
        }
      }
    }

    initCarousel() {
      this.isMoving = false
      this.items[this.totalItems - 1].classList.add('prev')
      this.items[0].classList.add('active')
      this.items[1].classList.add('next')
    }

    toPrev() {
      if (this.isMoving) return

      if (this.current === 0) {
        this.current = this.totalItems - 1
      } else {
        this.current--
      }
      this.moveCarousel()
    }

    toNext() {
      if (this.isMoving) return

      if (this.current === this.totalItems - 1) {
        this.current = 0
      } else {
        this.current++
      }
      this.moveCarousel()
    }

    setEventListener() {
      this.prevButton = this.carouselElement.querySelector(
        '.carousel_button--prev'
      )
      this.nextButton = this.carouselElement.querySelector(
        '.carousel_button--next'
      )

      this.prevButton.addEventListener('click', () => {
        this.toPrev()
      })
      this.nextButton.addEventListener('click', () => {
        this.toNext()
      })
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const carouselElement = get('.carousel')
    const carousel = new Carousel(carouselElement)
    carousel.initCarousel()
    carousel.setEventListener()
  })
})()
