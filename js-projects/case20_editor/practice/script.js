import commands from './commands.js'
;(function () {
  const get = (target) => {
    return document.querySelector(target)
  }

  const editorEdit = get('.editor.edit')
  const editorHtml = get('.editor.html')
  const editorButtons = get('.editor_buttons')
  const showEditorButton = get('.show_editor_button')
  const showHTMLButton = get('.show_html_button')

  const setCommand = (command) => {
    let cmd = command.cmd
    let val = command.val
    let label = command.label

    let setVal =
      typeof val !== 'undefined'
        ? prompt(label + '를 입력해주세요 (영어 또는 숫자)', val)
        : ''
    document.execCommand(cmd, false, setVal || '')
  }

  const onClickShowButton = (e) => {
    if (e.target.innerText === 'HTML 보기') {
      let textContent = editorEdit.innerHTML
      editorHtml.innerText = textContent
      editorHtml.classList.add('show')
      editorEdit.classList.remove('show')
    } else if (e.target.innerText === '에디터 보기') {
      editorEdit.classList.add('show')
      editorHtml.classList.remove('show')
    }
  }

  const init = () => {
    commands.map((command) => {
      const element = document.createElement('button')
      element.innerText = command.label
      element.addEventListener('click', (e) => {
        e.preventDefault()
        setCommand(command)
      })
      editorButtons.appendChild(element)
    })
  }

  showHTMLButton.addEventListener('click', onClickShowButton)
  showEditorButton.addEventListener('click', onClickShowButton)

  init()
})()
