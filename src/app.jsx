import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Notess from './components/notess/Notess'
import style from './app.module.css'
import { getInitialData } from './data/Index'

function App () {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState([])
  const [notes, setNotes] = useState(getInitialData())

  const active = (search || notes).filter((note) => !note.archived)
  const archived = (search || notes).filter((note) => note.archived)

  useEffect(() => {
    setSearch(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())))
  }, [query, notes])

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className={style.main}>
        <Form updateNotes={setNotes} />
        <Notess label='Active Notes' notes={active} setNotes={setNotes} />
        <Notess label='Archived Notes' notes={archived} setNotes={setNotes} />
      </main>
    </>
  )
}

export default App
