;(function () {
  'use strict'

  const get = (element) => document.querySelector(element)

  class PhotoEditor {
    constructor() {
      this.container = get('main')
      this.width = 500
      this.height = 300
      this.targetImage = get('.canvas_wrap')
      this.targetCanvas = document.createElement('canvas')
      this.targetCtx = this.targetCanvas.getContext('2d')
      this.img = new Image()
      this.btnFlip = get('.btn_flip')
      this.btnSepia = get('.btn_sepia')
      this.btnGray = get('.btn_gray')
      this.btnSave = get('.btn_save')
      this.fileInput = get('.drag_area input')
      this.fileImage = get('.fileImage')
      this.clickEvent()
      this.fileEvent()
    }

    clickEvent() {
      this.btnFlip.addEventListener('click', this.flipEvent.bind(this))
      this.btnSepia.addEventListener('click', this.sepiaEvent.bind(this))
      this.btnGray.addEventListener('click', this.grayEvent.bind(this))
      this.btnSave.addEventListener('click', this.download.bind(this))
    }

    flipEvent() {
      this.targetCtx.translate(this.targetCtx.canvas.width, 0)
      this.targetCtx.scale(-1, 1)
      this.targetCtx.drawImage(this.img, 0, 0, this.width, this.height)
    }

    sepiaEvent() {
      this.targetCtx.filter = 'sepia(1)'
      this.targetCtx.drawImage(this.img, 0, 0, this.width, this.height)
    }

    grayEvent() {
      this.targetCtx.filter = 'grayscale(1)'
      this.targetCtx.drawImage(this.img, 0, 0, this.width, this.height)
    }

    fileEvent() {
      this.fileInput.addEventListener('change', (event) => {
        const fileName = URL.createObjectURL(event.target.files[0])
        this.img.addEventListener('load', () => {
          this.targetCanvas.width = this.width
          this.targetCanvas.height = this.height
          this.targetCtx.drawImage(
            this.img,
            0,
            0,
            this.targetCtx.canvas.width,
            this.targetCtx.canvas.height
          )
        })
        this.img.setAttribute('src', fileName)
        this.targetImage.appendChild(this.targetCanvas)
      })
    }

    download() {
      const url = this.targetCanvas.toDataURL()
      const downloader = document.createElement('a')
      downloader.style.display = 'none'
      downloader.setAttribute('href', url)
      downloader.setAttribute('download', 'canvas.png')
      console.log(this.container)
      // this.container.appendChild(downloader)
      // downloader.click()
      // setTimeout(() => {
      //   this.container.removeChild(downloader)
      // }, 100)
    }
  }

  new PhotoEditor()
})()
