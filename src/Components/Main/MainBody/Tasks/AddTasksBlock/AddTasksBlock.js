import { getShowEditor, setShowEditor } from "../../../../../Redux/PomodoroSlice";
import { useDispatch, useSelector } from 'react-redux';
import AddTaskButton from "./AddTaskButton";
import AddTasksEditor from "./AddTasksEditor";


const AddTasksBlock = () => {

  const showEditor = useSelector(getShowEditor);
  const dispatch = useDispatch();

  const handleShowEditor = () => {
    dispatch(setShowEditor(!showEditor))
  }
  

  return (
    <div>
      { showEditor && (
        <AddTasksEditor handleShowEditor = { handleShowEditor } />
      )}

      { !showEditor && (
        <AddTaskButton handleShowEditor = { handleShowEditor } />
      )}
    </div>
  )
}

export default AddTasksBlock;