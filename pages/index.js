/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react'
import Spinner from '../components/widgets/Spinner'
import OnScreenShow from '../components/widgets/OnScreenShow'
import Image from 'next/image'
import RadarChart from '../components/widgets/RadarChart'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Home() {

  const [loading, setLoading] = useState(true);
  const myTimeout = setTimeout(()=>setLoading(false), 1500)

  useEffect(() => {
    clearTimeout(myTimeout)
  }, [myTimeout])
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrapper}>
        <div className={styles.greetings}>
          <h1>WELCOME</h1>
          <h2>
            I'm a fullstack developer with a passion in building <span>creative</span> and <span>innovative</span> applications.
          </h2>
          <div>My Portfolio <MdOutlineKeyboardArrowRight/> </div>
        </div>
        <div className={styles.iframeContainer}>
          <iframe src='https://my.spline.design/miniroom-f2dc142b58d74e50df3d4fd9a342ad76/' frameBorder='0' width='100%' height='100%'></iframe>
          {loading && <Spinner/>}
        </div>
      </div>
      <OnScreenShow className={styles.mainWrapperSm}>
        <div className={styles.highlights}>
          <h1>Highlights</h1>
          <div className={styles.highlightsGrid}>

            <div className={styles.container}>
              <div className="imageContainer">
                <Image src='/icons/build.png' alt="react" objectFit='contain' width={60} height={60}/>
              </div>
              <div className={styles.des}>
                <div className={styles.header}>Experience</div>
                <div className={styles.content}> 
                  <span>1.5</span> years hands-on experience on <span>ReactJS</span> and <span>Node</span>/<span>Django</span> as well as framework/librarys that are commonly used with them.
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className="imageContainer">
                <Image src='/icons/coding.png' alt="react" objectFit='contain' width={60} height={60}/>
              </div>
              <div className={styles.des}>
                <div className={styles.header}>Education</div>
                <div className={styles.content}>
                  Holding <span>Computer Science</span>/<span>Mathematics</span> undergradate degrees and a <span>Data Science</span> graduate degree. Self-taught UI/UX designer and full stack developer for <span>3</span> years.
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className="imageContainer">
                <Image src='/icons/work.png' alt="react" objectFit='contain' width={60} height={60}/>
              </div>
              <div className={styles.des}>
                <div className={styles.header}>Previously</div>
                <div className={styles.content}>
                  Worked as a Full Stack Engineer in <span>Laboratory for AI-Powered Technologies</span> - research based financial technology firm,  for <span>0.5</span> years
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className="imageContainer">
                <Image src='/icons/ai.png' alt="react" objectFit='contain' width={60} height={60}/>
              </div>
              <div className={styles.des}>
                <div className={styles.header}>Extra Skills</div>
                <div className={styles.content}>
                  Specialized in <span>data visualization</span> and <span>machine learning</span>. Capable of performing market researh with <span>data science</span> skills and building <span>data-driven</span> applications.
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className="imageContainer">
                <Image src='/icons/teach.png' alt="react" objectFit='contain' width={60} height={60}/>
              </div>
              <div className={styles.des}>
                <div className={styles.header}>Others ． Current</div>
                <div className={styles.content}>
                  Have been <span>teaching</span> high school students to prepare for subjects like computer science (JAVA), pre-calculus and linear algebra for <span>2</span> years.
                </div>
              </div>
            </div>

          </div>
        </div>
      </OnScreenShow>
      <div className={styles.strip}>
      <OnScreenShow className={styles.mainWrapperXs}>
        <div className={styles.tools}>
          <div className={styles.outerWrapper}>
            <div className={styles.innerWrapper}>
              <h2>Frontend</h2>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Image src="/icons/react-js.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>ReactJS/React Native</span>
                    <span className={styles.subtitle}>Experienced</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/nextjs.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>NextJS</span>
                    <span className={styles.subtitle}>Experienced</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/css.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>CSS/SCSS/Tailwind</span>
                    <span className={styles.subtitle}>Experienced</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/bootstrap-4.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>Bootstrap</span>
                    <span className={styles.subtitle}>Intermediate</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/redux.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>Redux</span>
                    <span className={styles.subtitle}>Experienced</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/figma.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>Figma</span>
                    <span className={styles.subtitle}>Basic</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.innerWrapper}>
              <h2>Backend</h2>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Image src="/icons/node-js.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>NodeJS/ExpressJS</span>
                    <span className={styles.subtitle}>Intermediate</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/django.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>Django</span>
                    <span className={styles.subtitle}>Intermediate</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/mongodb.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>MongoDB</span>
                    <span className={styles.subtitle}>Experienced</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/mysql.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>MySQL</span>
                    <span className={styles.subtitle}>Intermediate</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/graphql.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>GraphQL</span>
                    <span className={styles.subtitle}>Intermediate</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image src="/icons/aws.svg" width={40} height={40} alt="react"/>
                  <div>
                    <span className={styles.title}>Cloud Services</span>
                    <span className={styles.subtitle}>Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OnScreenShow>
      </div>
      <OnScreenShow className={styles.mainWrapperXs}>
        <div className={styles.skills}>
          <h1>Skills</h1>
          <div className={styles.skillsContainer}>
            <div className={styles.content}>
              Python and Javascript are my major programming languages, though, I can also use other languages such as PHP, Java and C++ to get the jobs done.
            </div>
            <div className={styles.radialChart}>
              <RadarChart/>
            </div>
          </div>
        </div>
      </OnScreenShow>
      <OnScreenShow className={styles.mainWrapperSm}>
        <div className={styles.offer}>
          <h1>Services</h1>
          <div className={styles.offerContainer}>
            <div className={styles.imageContainer}>
              <Image src="/my.svg" alt="my" width={350} height={350}/>
              <div className={styles.shadow}/>
            </div>
            <div className={styles.content}>

                <div className={styles.contentItem}>
                  <span>Digital Transformation</span>
                  <div>
                    Adaptive to any technologies, capable of building full stack mobile/web/desktop project. I can turn ideas into realistic.
                  </div>
                </div>

                <div className={styles.contentItem}>
                  <span>UI/UX Design</span>
                  <div>
                    Creative sense, UI/UX skills and able to create 3D models and animations.
                  </div>
                </div>

                <div className={styles.contentItem}>
                  <span>Machine Learning</span>
                  <div>
                    Data driven products are now in demand. I help companys to implement, tune models and deploy on cloud platform.
                  </div>
                </div>

            </div>
          </div>
        </div>
      </OnScreenShow>
    </div>
  )
}
