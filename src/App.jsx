import React from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Wedding Planner</h1>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App