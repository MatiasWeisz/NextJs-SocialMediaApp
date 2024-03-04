'use client'

import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>Sobre Nosotros</h2>
        <h1 className={styles.title}>Texto sobre lo que hacemos y quienes somos</h1>
        <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>+ 30</h1>
            <p>Años de Experiencia</p>
          </div>
          <div className={styles.box}>
            <h1>+ 30</h1>
            <p>Años de Experiencia</p>
          </div>
          <div className={styles.box}>
            <h1>+ 30</h1>
            <p>Años de Experiencia</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="Foto"
          fill
          className={styles.img}
        />

       
      </div>
    </div>
  )
}

export default AboutPage