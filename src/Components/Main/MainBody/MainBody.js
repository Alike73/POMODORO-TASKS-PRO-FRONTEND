import Tasks from "./Tasks/Tasks";
import TimerBlock from "./TimerBlock/TimerBlock";


const MainBody = () => {

  return (
    <div className="py-3">
      <TimerBlock />
      <Tasks />
    </div>
  )
}

export default MainBody;