;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const getAll = (target) => {
    return document.querySelectorAll(target)
  }

  class Calculator {
    constructor(element) {
      this.element = element
      this.currentValue = ''
      this.prevValue = ''
      this.operation = null
    }

    appendNumber(number) {
      console.log(this.currentValue)
      console.log('number', number)
      // if (this.currentValue && number) {
      //   this.currentValue = ''
      //   return
      // }

      if (number === '.' && this.currentValue.includes('.')) return
      this.currentValue = this.currentValue.toString() + number.toString()
    }

    setOperation(operation) {
      this.resetOperation()
      this.operation = operation
      this.prevValue = this.currentValue
      this.currentValue = ''

      const elements = Array.from(getAll('.operation'))
      const element = elements.filter((element) =>
        element.innerHTML.includes(operation)
      )[0]
      element.classList.add('active')
    }

    calculate() {
      let calculation
      const prev = parseFloat(this.prevValue)
      const current = parseFloat(this.currentValue)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '÷':
          calculation = prev / current
          break
        case '*':
          calculation = prev * current
          break
        case '-':
          calculation = prev - current
          break
        case '+':
          calculation = prev + current
          break
        default:
          return
      }

      this.currentValue = calculation.toString()
      this.prevValue = ''
      this.resetOperation()
    }

    reset() {
      this.currentValue = ''
      this.prevValue = ''
      this.resetOperation()
    }

    clear() {
      if (this.currentValue) {
        this.currentValue = ''
        return
      }
      if (this.operation) {
        this.resetOperation()
        this.currentValue = this.prevValue
        return
      }
      if (this.prevValue) {
        this.prevValue = ''
        return
      }
    }

    resetOperation() {
      this.operation = null
      const elements = Array.from(getAll('.operation'))
      elements.forEach((element) => {
        element.classList.remove('active')
      })
    }

    updateDisplay() {
      if (this.currentValue) {
        this.element.value = this.currentValue
        return
      }
      if (this.prevValue) {
        this.element.value = this.prevValue
        return
      }
      this.element.value = 0
    }
  }

  const numberButtons = getAll('.cell_button.number')
  const operatorButtons = getAll('.cell_button.operation')
  const computeButton = get('.cell_button.compute')
  const display = get('.display')
  const clearButton = get('.cell_button.clear')
  const resetButton = get('.cell_button.all_clear')

  const calculator = new Calculator(display)

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerHTML)
      calculator.updateDisplay()
    })
  })

  operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.setOperation(button.innerHTML)
      calculator.updateDisplay()
    })
  })

  computeButton.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
  })

  clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })

  resetButton.addEventListener('click', () => {
    calculator.reset()
    calculator.updateDisplay()
  })
})()
