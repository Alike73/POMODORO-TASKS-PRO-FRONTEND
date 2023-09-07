import BreakFilter from "./BreakFilter/BreakFilter";
import StartButton from "./StartButton/StartButton";


const TimerBlock = () => {

  const blockStyle = {
    padding: '1rem 1.5rem',
    background: 'rgba(214, 23, 23, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(214, 23, 23, 0.3)',
  }

  const countDisplayStyle = {
    fontFamily: 'Poppins, sans-serif',
    color: 'var(--c-timer-count)',
    fontSize: 'clamp(5rem, calc(var(--size) * 5.2), 9rem)',
    fontWeight: '700',
    textShadow: 'var(--text-shadow)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className="col-lg-8 mx-auto" style={ blockStyle }>
      <BreakFilter />
      <div style={ countDisplayStyle }>
        25:00
      </div>
      <StartButton />
    </div>
  )
}

export default TimerBlock;