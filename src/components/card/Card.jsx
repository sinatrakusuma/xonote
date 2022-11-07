import style from './card.module.css'
import { showFormattedDate } from '../../data/Index'
import Button from '../button/Button'

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item))
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived }
        }
        return note
      })
    )
  }

  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{showFormattedDate(createdAt)}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <Button eventHandler={() => deleteNote(id)} label='delete' />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? 'unarchived' : 'archive'}
        />
      </footer>
    </article>
  )
}

export default Card
