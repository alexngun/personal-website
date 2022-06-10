import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'

import { useState } from 'react'
import { useRouter } from 'next/router';

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

    const { push } = useRouter()

    return (
    <nav className={styles.navBarContainer}>
        <div className={styles.navBar}>

            <div className={styles.icon} onClick={()=>push("/")}>
                <Image 
                    width={30} height={30}
                    src="/icon.svg" 
                    alt="paw"
                />
                <span>AlexNgun</span>
            </div>

            <div className={styles.hireMe} onClick={()=>push("/contact")}>
                <span>Hire Me</span>
            </div>

        </div>
    </nav>
    )
}

export default Navbar