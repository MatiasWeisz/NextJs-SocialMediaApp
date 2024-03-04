/*
"use client"
import React from 'react'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
import Links from 'next/link'

function NavLink(item) {

    const pathName = usePathname()

  return (
    <Links href={item.path} 
    className= {`${styles.container} ${
      pathName === item.path && styles.active}
      `}>
        {item.title}
        </Links>
  )
}

export default NavLink

*/

// 3er codigo
"use client"
import React from 'react'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function NavLink({ item }) {

    const pathName = usePathname()

    return (
        <Link href={item.path} passHref>
            <div className={`${styles.container} ${
                pathName === item.path ? styles.active : ''
                }`}>
                {item.title}
            </div>
        </Link>
    )
}

export default NavLink

