import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'

import { useState } from 'react'

function BurgerMenuIcon() {

    const [toggle, setToggle] = useState(false);

    return (
    <div id="bu" className={styles.burgerMenu} onClick={()=>setToggle(s=>!s)}>
        <i className={toggle?styles.openStyle1:styles.closeStyle1}/>
        <i className={toggle?styles.openStyle2:styles.closeStyle2}/>
        <i className={toggle?styles.openStyle3:styles.closeStyle3}/>
    </div>
    )
}

function Navbar() {
  return (
    <nav className={styles.navBarContainer}>
        <div className={styles.navBar}>

            <div className={styles.icon}>
                <Image 
                    width={30} height={30}
                    src="/icon.svg" 
                    alt="paw"
                />
                <span>AlexNgun</span>
            </div>

            <div className={styles.navItems}>
                <span>{"<About/>"}</span>
                <span>{"<Work/>"}</span>
            </div>

            <div className={styles.hireMe}>
                <span>Hire Me</span>
            </div>

            <BurgerMenuIcon/>

        </div>
    </nav>
  )
}

export default Navbar