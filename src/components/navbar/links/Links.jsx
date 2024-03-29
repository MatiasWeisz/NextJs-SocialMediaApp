"use client";

import React, { useState } from 'react';
import styles from "./links.module.css";
import NavLink from './navLink/navLink';

function Links() {

  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Inicio",
      path: "/"
    },
    {
      title: "Sobre Nosotros",
      path: "/about"
    },
    {
      title: "Contacto",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.moblieLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
