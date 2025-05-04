import React, { useState } from 'react'

const AddTask = () => {
  const [title, setTitle] = useState('')

  const handleAdd = async () => {
    await fetch('https://weddingplanner-backend.onrender.com/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    window.location.reload()
  }

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  )
}

export default AddTask