import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = photos.map(photo => {
      if(photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })

    setPhotos(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  return (
    <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}