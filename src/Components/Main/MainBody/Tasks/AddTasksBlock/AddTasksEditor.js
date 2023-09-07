import EstPomodoro from "./EstPomodoro";


const AddTasksEditor = ({ handleShowEditor }) => {

  return (
    <div className="col-lg-8 mx-auto add_tasks_editor">
      <input 
      className="form-control form-control-lg" 
      type="text" 
      placeholder="What are you working on?" 
      aria-label=".form-control-lg example" 
      />
      <EstPomodoro />
      
      <div className="d-flex justify-content-end align-items-center editor_btn_container p-2 mt-3">
        <div className="btn-group">
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary"
            onClick={ handleShowEditor }
            >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn btn-sm btn-outline-secondary"
            >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTasksEditor;