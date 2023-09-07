import AddTasksBlock from "./AddTasksBlock/AddTasksBlock";
import TasksHeader from "./TasksHeader/TasksHeader";


const Tasks = () => {

  const currentTaskTitle = {
    marginTop: '2rem',
    textAlign: 'center',
    color: 'var(--c-label)'
  }

  return (
    <div>
      <h3 style={ currentTaskTitle }>Task name...</h3>
      <TasksHeader />
      <AddTasksBlock />
    </div>
  )
}

export default Tasks;