import React from 'react'
import './task-card.css'

const TaskCard = ({title, description, finished}) => {
  return (
    <dl className='task-card'>
      <dt className='title'>{title}</dt>
      <dl>{description}</dl>
      <dl>Concluído? {finished ? 'Sim' : 'Não'}</dl>
    </dl>
  )
}

export default TaskCard
