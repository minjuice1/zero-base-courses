;(function () {
  'use strict'

  const get = (target) => document.querySelector(target)

  const $from = get('form')

  const baseball = {
    limit: 10,
    trial: 0,
    digit: 4,
    end: false,
    $question: get('.ball_question'),
    $answer: get('.ball_answer'),
    $input: get('.ball_input'),
  }

  const { limit, digit, $question, $answer, $input } = baseball
  let { trial, end } = baseball

  const setPwd = () => {
    const gameLimit = Array(limit).fill(false)
    let password = ''
    while (digit > password.length) {
      const random = Math.floor(Math.random() * 10)

      if (gameLimit[random]) {
        continue
      }

      password += random
      gameLimit[random] = true
    }
    baseball.password = password
    console.log('password', baseball.password)
  }

  const onPlayed = (number, hint) => {
    return `<em>${trial}차 시도 </em>: ${number}, ${hint}`
  }

  const isCorrect = (number, answer) => {
    return number === answer
  }

  const isDuplicate = (number) => {
    return [...new Set(number)].join('').length !== digit
  }

  const getStrike = (number, answer) => {
    let strike = 0
    const nums = number.split('')

    nums.map((digit, index) => {
      if (digit === answer[index]) {
        strike++
      }
    })
    return strike
  }

  const getBall = (number, answer) => {
    let ball = 0
    const nums = number.split('')
    const gameLimit = Array(limit).fill(false)

    answer.split('').map((num) => {
      gameLimit[num] = true
    })

    nums.map((digit, index) => {
      console.log('digit', digit)
      console.log('index', answer[index])
      if (digit === answer[index]) {
        ball++
      }
    })
    return ball
  }

  const playGame = (e) => {
    e.preventDefault()

    if (end) {
      return
    }

    const { password } = baseball
    const inputnumber = $input.value

    if (inputnumber.length !== digit) {
      alert('4자리 숫자를 입력해주세요')
    } else if (isDuplicate(inputnumber)) {
      alert('중복된 숫자입니다!')
    } else {
      trial++
      const result = onPlayed(inputnumber, getResult(inputnumber, password))
      $question.innerHTML += `<span>${result}</span>`
    }

    if (trial >= limit && !isCorrect(inputnumber, password)) {
      alert('쓰리 아웃!')
      end = true
      $answer.innerHTML = password
    }

    $input.value = ''
    $input.focus()
  }

  const getResult = (number, answer) => {
    if (isCorrect(number, answer)) {
      alert('정답 입니다!')
      end = true
      $answer.innerHTML = baseball.password
      return '홈런!!'
    }

    const strike = getStrike(number, answer)
    const ball = getBall(number, answer)
    return `STRIKE: ${strike}, BALL: ${ball}`
  }

  const init = () => {
    $from.addEventListener('submit', (e) => {
      playGame(e)
    })
    setPwd()
  }
  init()
})()
