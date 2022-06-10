import React, { useState } from 'react'
import styles from '../styles/Contact.module.scss'
import { motion } from 'framer-motion'
import axios from 'axios'
import { message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#ffebd3" }} spin />;

function contact() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState({
        name: "",
        email: "",
        title: "",
        messages: ""
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);
    

    const handleChange = e => {
        switch(e.target.name) {
            case "name":
                setText(s=>({...s, name: e.target.value}))
                break
            case "email":
                setText(s=>({...s, email: e.target.value}))
                break
            case "title":
                setText(s=>({...s, title: e.target.value}))
                break
            case "messages":
                setText(s=>({...s, messages: e.target.value}))
            default:
                break
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await axios.post("https://www.alexngun.com/api/email", text)
        if(res.status==200) {
            message.success('Email sent successfully!', 5);
        }
        setLoading(false)
    }

  return (
    <motion.div  
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className={styles.mainContainer}
    >
        <div className={styles.mainWrapper}>
            <div className={styles.contactForm}>
                <h1>Contact Me</h1>
                <div className={styles.message}>Thank you for your interest, please leave your messages below and I will contact you back shortly.</div>
                <form onSubmit={handleSubmit} className={styles.formBox}>
                    <input value={text.name} onChange={handleChange} name="name" type="text" placeholder='Name'/>
                    <input value={text.email} onChange={handleChange} name="email" type="email" placeholder='Email'/>
                    <input value={text.title} onChange={handleChange} name="title" type="text" placeholder='Title'/>
                    <textarea value={text.messages} onChange={handleChange} name="messages" className={styles.contentBox} type="text" placeholder='Messages'/>
                    <button className={styles.submit}> 
                        {loading ? <Spin indicator={antIcon}/> : "submit"}
                    </button>
                </form>
            </div>
        </div>
    </motion.div>
  )
}

export default contact