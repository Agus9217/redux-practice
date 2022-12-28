import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/Tasks/taskSlice"
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";


const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }
    navigate('/')
  }

  useEffect(() => {
    if(params.id) {
      setTask(
        tasks.find(task => task.id === params.id)
      )
    }
  }, [])
  
  return (
    <form onSubmit={ handleSubmit }>
      <input
        name='title'
        type='text' 
        placeholder='Title'
        value={task.title}
        onChange={ handleChange } 
      />
      <textarea 
        name='description'
        type='text'
        placeholder='Description'
        value={task.description}
        onChange={ handleChange }
      />
      <button>Save</button>
    </form>
  )
}

export default TaskForm