import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/404.module.scss'
import { useRouter } from 'next/router'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}


function _404() {

  const { push } = useRouter()

  return (
    <motion.div  
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className={styles.mainContainer}
    >
      <div>
        <h1>Sorry, 404 Page Not Found</h1>
        <button onClick={()=>push("/")}>Home</button>
      </div>

    </motion.div>
  )
}

export default _404