

const TasksHeader = () => {

  const tasksHeaderTitle = {
    color: 'var(--c-label)'
  }

  return (
    <header className="col-lg-8 d-flex flex-wrap justify-content-between align-items-center pb-3 pt-3 mb-4 mx-auto border-bottom">
      <h3 style={ tasksHeaderTitle }>Tasks</h3>
      <div className="dropstart">
        <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-three-dots-vertical fs-3" />
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#abc">Clear finished tasks</a></li>
          <li><a className="dropdown-item" href="#abc">Another action</a></li>
          <li><a className="dropdown-item" href="#abc">Something else here</a></li>
        </ul>
      </div>
    </header>
  )
}

export default TasksHeader;