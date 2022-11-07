import style from './notes.module.css'
import Card from '../card/Card'
const Notess = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className={style.position}>{label}</h2>
      {notes.length === 0
        ? (
        <h2 className={style.empty}>no note.</h2>
          )
        : (
        <div className={style.listNotes}>
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
          )}
    </section>
  )
}

export default Notess
