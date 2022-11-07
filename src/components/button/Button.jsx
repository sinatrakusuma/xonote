import style from './button.module.css'

const Button = ({ label, eventHandler }) => {
  return (
    <button className={style.button} type='button' onClick={eventHandler} data-action={label}>
      {label}
    </button>
  )
}

export default Button
