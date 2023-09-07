

const AddTaskButton = ({ handleShowEditor }) => {

  

  return (
    <div className="col-lg-8 mx-auto">
      <button 
        className="add_task_btn"
        onClick={ handleShowEditor }
        >
        <i className="bi bi-plus-circle-dotted fs-3 me-2" />
        Add task
      </button>
    </div>
  )
}

export default AddTaskButton;