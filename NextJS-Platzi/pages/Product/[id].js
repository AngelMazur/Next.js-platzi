import React from 'react'
import { useRouter } from 'next/router'

const product = () => {

  // const router = useRouter()
  const {query: {id}} = useRouter()
  //Esta destructurado el objeto query de useRouter()

  return (
    <div>
      <h1>
        Soy una página dinámica, la ruta que has escrito es: {id}
      </h1>
    </div>
  )
}

export default product
