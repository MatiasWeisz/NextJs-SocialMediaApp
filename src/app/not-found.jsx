import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div>
      <h2>Error 404</h2>
        <p>No se encontro la pagina que esta intentando buscar</p>
        <Link href ="/"> Volver al Home </Link> 
    </div>
  )
}

export default NotFound
