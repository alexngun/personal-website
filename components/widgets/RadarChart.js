import React from 'react'
import styles from '../../styles/WidgetStyle.module.scss'

function RadarChart() {
  return (
    <div className={styles.pentagonContainer}>
        <div
         style={{top: "-30px", left: "120px"}}
         className={styles.label}
        >
         Frontend
        </div>
        <div
         style={{top: "105px", right: "-65px"}}
         className={styles.label}
        >
         Backend
        </div>
        <div
         style={{top: "100px", left: "-70px"}}
         className={styles.label}
        >
         <div>Problem</div>
         <div>Solving</div>
        </div>
        <div
         style={{bottom: "-30px", left: "-20px"}}
         className={styles.label}
        >
         Communication
        </div>
        <div
         style={{bottom: "-30px", right: "0px"}}
         className={styles.label}
        >
         Adaptability
        </div>
        <div className={styles.pentagon}/>
        <div className={styles.skills}/>
    </div>
  )
}

export default RadarChart