import React from 'react'
import inputs from '../../helpers/StatelessInput'
import TaskApi from '../../services/TaskApi'
import './main-form.css'

const onSelectInput = (e) => {
  const $inputTitle = document.querySelector('.main-form .input')
  if ($inputTitle) {
    $inputTitle.classList.remove('-hide')
  }
}

const onSubmitForm = (e) => {
  e.preventDefault()

  const { title, description, finished } = inputs()

  const task = {
    title,
    description,
    finished: (finished === 'on')
  }

  TaskApi.createTask(task)

  const $inputTitle = document.querySelector('.main-form .input')
  if ($inputTitle) {
    $inputTitle.classList.add('-hide')
  }
}

const MainForm = () => {
  return (
    <React.Fragment>
      <form className='main-form' onSubmit={(a) => onSubmitForm(a)}>
        <input name='title' className='input -hide' type='text' placeholder='Título...' />

        <input name='description' className='input' type='text' placeholder='Criar uma nota...'
          onClick={(e) => onSelectInput(e)} />

        <input name='finished' type='checkbox' />
        <button>salvar</button>
      </form>
    </React.Fragment>
  )
}

export default MainForm
