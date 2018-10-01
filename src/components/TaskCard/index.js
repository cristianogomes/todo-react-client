import React from 'react'

const TaskCard = ({title, description, finished}) => {
  return (
    <dl>
      <hr />
      <dt>{title}</dt>
      <dl>{description}</dl>
      <dl>Concluído? {finished ? 'Sim' : 'Não'}</dl>
    </dl>
  )
}

export default TaskCard
