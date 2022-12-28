import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTask } from "../features/Tasks/taskSlice"

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  
  return (

    <div>
    <header>
      <h1>Tasks {tasks.length}</h1>
    </header>
    <Link to='/create-task'>
      <button >Create Task</button>
    </Link>

      {
        tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={ () => handleDelete(task.id) }>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList