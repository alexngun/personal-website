import React from 'react'
import styles from '../../styles/WidgetStyle.module.scss'

function Spinner({id, disable}) {
  return (
    <div id={id} disable={JSON.stringify(disable)} className={styles.spinnerContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner