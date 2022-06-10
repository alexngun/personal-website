import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Work.module.scss'
import { BiLinkAlt } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const data = {
    "coinTracker": {
        name: "Cryptocoin Tracker",
        des: "This app checks the latest market data of crpytocurrency. It provides 'Add To Watchlist' features and tools for users to analyze their portfolio.",
        platform: "IOS / Android",
        live: null,
        Stack: ["React Native", "Redux", "Reanimated", "Native Base"],
        pic: [
            "trackor",
            "chart",
            "portfolio",
            "search",
        ],
        type: "grid",
        github: "https://github.com/alexngun/coin-tracker",
        mode: "Frontend"
    },
    "foodies": {
        name: "Foodies",
        des: "A simple E-Commerce website that built with secure authentication system and payment method. Users can take orders, track orders and more.",
        platform: "Web",
        live: "https://foodies-pi.vercel.app/",
        Stack: ["NextJS", "Redux", "MongoDB", "Stripe", "Auth0"],
        pic: [
            "homepage",
            "checkoutpage",
            "oauthpage",
            "productpage",
        ],
        type: "normal",
        github: "https://github.com/alexngun/Foodies",
        mode: "Full Stack"
    }
}

function workDetail() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { query, push, back } = useRouter()
    const name = data[query.id]?.name
    const des = data[query.id]?.des
    const platform = data[query.id]?.platform
    const stack = data[query.id]?.Stack
    const pics = data[query.id]?.pic
    const type = data[query.id]?.type
    const live = data[query.id]?.live
    const github = data[query.id]?.github
    const mode = data[query.id]?.mode

    const width = typeof window == "undefined" ? 0 : window.innerWidth

  return (
    <motion.div  
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className={styles.mainContainer}
    >
        <div className={styles.detailWrapper}>
            <div className={styles.header}>
                <div> <div className={styles.back} onClick={()=>back()}>Works / </div>  <span>{name}</span> <label>{mode}</label></div>
                <div onClick={()=>push(github)} className={styles.link}><BsGithub/>  Source</div>
            </div>
            <p className={styles.des}>{des}</p>
            { live && 
                <div className={styles.tags}>
                    <label>website</label>
                    <a href={live}>{live} <BiLinkAlt/> </a>
                </div>
            }
            <div className={styles.tags}>
                <label>platform</label>
                <span>{platform}</span>
            </div>
            <div className={styles.tags}>
                <label>stack</label>
                <span>{stack && stack.map((item, index)=>`${item}${stack.length-1!==index?" / ":""}`)}</span>
            </div>
            <div className={type=="grid"?styles.imagesWrapperGrid:styles.imagesWrapper}>
                {pics && pics.map(item=>
                    <div className={styles.imageContainer} key={item}>
                         <Image objectFit={type=="grid"||width<=1000?"contain":"cover"} src={`/web/${query.id}/${item}${type==="grid"||width>1000?".png":"-mini.png"}`} layout="fill" alt={`/web/${query.id}/${item}${width>1000&&type!=="grid"?".png":"-mini.png"}`}/>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
  )
}

export default workDetail