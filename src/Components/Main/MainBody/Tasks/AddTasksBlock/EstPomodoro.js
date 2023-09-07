


const EstPomodoro = () => {

  return (
    <div className="py-3">
      <h5 className="px-3 est_pomo_title">Est Pomodoros</h5>
      <div className="d-flex px-3">
        <input type="number" min="0" step="1" defaultValue="1" />
        <button className="est_pomo_btn">
          <i className="bi bi-caret-up-fill fs-3" />
        </button>
        <button className="est_pomo_btn">
          <i className="bi bi-caret-down-fill fs-3" />
        </button>
      </div>
    </div>
  )
}

export default EstPomodoro;