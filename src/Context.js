import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <Context.Provider value={{photos}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}