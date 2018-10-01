import React from 'react'
import inputs from '../../helpers/StatelessInput'
import TaskApi from '../../services/TaskApi'

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
      <form onSubmit={(a) => onSubmitForm(a)}>
        <input name='title' type='text' placeholder='Título...' />

        <textarea name='description' placeholder='Criar uma nota...' />

        <button>salvar</button>
      </form>
    </React.Fragment>
  )
}

export default MainForm
