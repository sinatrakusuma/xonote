import { useState } from 'react'
import Input from '../input/Input'
import style from './form-input.module.css'

const Form = ({ updateNotes }) => {
  const clear = () => {
    setTitle('')
    setNote('')
  }

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const createNote = (event) => {
    event.preventDefault()
    const timestamp = new Date().toISOString()

    document.getElementById('title').value = ''
    document.getElementById('note').value = ''

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp }
    ])
    clear()
  }
  return (
    <form className={style.form} onSubmit={createNote}>
      <h2 className={style.heading}>Create a note</h2>
      <small className={style.small}>
        Remaining characters: <span className={style.counter}>{50 - title.length}</span>
      </small>
      <Input
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Title'
        id='title'
        name='title'
        defaultValue="reset"
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Write your note'
        id='note'
        name='note'
        required
      />
      <Input className={style.Submit}type='submit' id='submit_form' name='submit_form' value='Submit' />
    </form>
  )
}

export default Form
