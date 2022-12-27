import { useState } from "react"

const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <form>
      <input
        name='title'
        type='text' 
        placeholder='Title'
        onChange={handleChange} 
      />

      <textarea 
        name='description'
        type='text'
        placeholder='Description'
        onChange={handleChange}
      />

      <button>Save</button>

    </form>
  )
}

export default TaskForm