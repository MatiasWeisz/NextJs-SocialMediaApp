import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Espacio reservado para logo pequeño
      </div>
      <div className={styles.text}>
        Texto reservado para derechos de autor
      </div>
    </div>
    
  )
}

export default Footer
