import React, {useContext} from "react"
import Image from '../components/Image'
import {getClass} from '../utils'
import {Context} from '../Context'

function Photos() {
  const {photos} = useContext(Context)
  const imageEls = photos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)} />
  ))

  return (
    <main className="photos">
      {imageEls}
    </main>
  )
}

export default Photos