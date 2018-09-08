import React from 'react'
import Navbar from '../../components/NavBar'
import MainForm from '../../components/MainForm'
import TaskCard from '../../components/TaskCard'
import TaskApi from '../../services/TaskApi'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  async componentDidMount () {
    const tasks = await TaskApi.findAll()

    this.setState({
      tasks: tasks.data
    })
  }

  renderTask (task) {
    return <TaskCard key={task.id} title={task.title} description={task.description} finished={task.finished} />
  }

  render () {
    return (
      <React.Fragment>
        <Navbar />

        <MainForm />

        {
          this.state.tasks &&
          this.state.tasks.map(this.renderTask)
        }

      </React.Fragment>
    )
  }
}

export default Home
