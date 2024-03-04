import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='' fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type='text' placeholder='Nombre y Apellido'/>
          <input type='text' placeholder='Email'/>
          <input type='text' placeholder='Numero de Telefono'/>
          <textarea name='' id='' cols="30" rows="10" placeholder='Mensaje'></textarea>
          <button>Enviar</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ContactPage
