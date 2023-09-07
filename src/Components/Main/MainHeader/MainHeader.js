

const MainHeader = () => {

  const mainHeaderTitle = {
    color: 'var(--c-label)'
  }

  return (
    <header className="col-lg-8 d-flex flex-wrap justify-content-between align-items-center pb-3 pt-5 mb-4 mx-auto border-bottom main_header">
      <h3 style={ mainHeaderTitle }>
        <i className="bi bi-card-checklist fs-3 me-2" />
        Pomoflow
      </h3>

      <ul className="nav nav-pills">
        <li className="nav-item">
        <button type="button" className="btn btn-outline-secondary px-4 mx-2" data-bs-toggle="modal" data-bs-target="#main_report">
          <i className="bi bi-file-earmark-bar-graph-fill me-2" />
          Report
        </button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-outline-secondary px-4 mx-2" data-bs-toggle="modal" data-bs-target="#main_setting">
          <i className="bi bi-gear-wide-connected me-2" />
          Setting
        </button>
        </li>
      </ul>
      <progress className='main_header_progress' max="100" value="45" />
    </header>
  )
}

export default MainHeader;