import { createContext, useState, useContext } from "react";
import canciones from '@/assets/listaCanciones.json'

const SongContext = createContext()

function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState([])
  const [selectedSong, setSelectedSong] = useState({})
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong

  }

  return(
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export { SongProvider }
