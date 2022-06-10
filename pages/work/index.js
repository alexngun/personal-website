import React, { useState, useEffect } from 'react'
import styles from '../../styles/Work.module.scss'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from 'framer-motion'

import "swiper/css";
import "swiper/css/navigation";

const portfolio = [
    {id: "foodies", cover: "/foodies/productpage.png", name: "Foodies", des: "An online food delivery website. Implemented with Stripe payment and Auth0 to allow secured transaction."},
    {id: "coinTracker", cover: "/coinTracker/trackor.png", name: "Cryptocoin Tracker", des: "Crypto Assets Tracker with tools and interactive plots to analyze assets portfolio."},
]


const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

function work() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { push } = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [size, setSize] = useState(0);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const width = typeof window == "undefined" ? 0 : window.innerWidth
        setSize(width)
    }, [])

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
            <div className={styles.avatar}>
                <Image src="/icons/boy.png" width={50} height={50} alt="me"/>
            </div>
            <span> Visit my  <BsGithub/> <label onClick={()=>push("https://github.com/alexngun")}> Github</label> to learn more of my projects</span>
        </div>
        <div className={styles.gridWrapper}>
        <Swiper
            slidesPerView={size > 1000 ? 2 : 1}
            spaceBetween={30}
            slidesPerGroup={size > 1000 ? 2 : 1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className={styles.swiper}
        >
            {portfolio.map(item=>
            <SwiperSlide key={item.id}>
                <div className={styles.card} onClick={()=>push(`/work/${item.id}`)}>
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.imageContainer}>
                        <Image src={`/web${item.cover}`} objectFit="contain" layout="fill" alt={`/web${item.cover}`}/>
                    </div>
                    <div className={styles.brief}>{item.des}</div>
                </div>
            </SwiperSlide>
            )}
        </Swiper>
        </div>
    </motion.div>
    )
}

export default work