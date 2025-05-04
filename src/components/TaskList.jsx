import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://weddingplanner-backend.onrender.com/tasks/')
      .then(res => res.json())
      .then(setTasks)
  }, [])

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title} — {task.completed ? '✅' : '❌'}</li>
      ))}
    </ul>
  )
}

export default TaskList