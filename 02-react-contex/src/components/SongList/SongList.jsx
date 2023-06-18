import { useEffect, useState } from 'react'
import './SongList.css'

const SongList = () => {
  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <article key={song.id} className='row-song'>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </article>
        ))}
    </section>
  )
}

export default SongList
