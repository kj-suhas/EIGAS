import React from "react"
import * as styles from "../styles/landing.module.css"
import landing from "../assets/landing.png"

const Landing = () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.flex}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100px",
          width: "100%",
        }}
      >
        <img className={styles.landingImg} src={landing} alt="Logo of Everyone is good at something" />
      </div>
      {/* </div> */}
      <div className={styles.h2Div}>
        <h2 className={styles.landingh2}>
          <span>everyone</span>{" "}
          <span>
            <div className={styles.dot}></div> is{" "}
            <div className={styles.dot}></div>
          </span>{" "}
          <span>good </span>
          <span>
            <div className={styles.dot}></div> at{" "}
            <div className={styles.dot}></div>
          </span>{" "}
          <span>something</span>
        </h2>
      </div>
      <div
        style={{
          marginTop: "80px",
          fontSize: "17px",
        }}
      >
        <p style={{
          fontSize: "16px",
        }}>
          For those who have habitually attended the India Inclusion Summit (IIF) in Bengaluru, its tagline "Everyone is Good at Something" is like an old familiar melody. Equally familiar is the recurring image of the Inclusion Tree on which birds of different colours perch and co-exist. While the slogan represents the aim of the IIS to amplify the unique skills of Persons with Disabilities (PWD), the I-Tree is a visual metaphor for the spirit of Inclusion. The IIS is one of the activities of the entirely volunteer-driven India Inclusion Foundation (IIF) with a vision to create an Inclusive India where no one is left behind. 
        </p>
        <p
        style={{
          fontSize: "16px",
        }}>
          The unsung heroes who occupy the IIS stage every year are only a tiny window into the vast landscape of unseen PWD in India. To bring them into focus, and thus to sensitise mainstream society to disability, IIF has kickstarted a running photo campaign called Everyone is Good at Something. Photographers (and occasionally, videographers) including the acclaimed Vicky Roy will capture the stories of lesser-known PWD living in challenging circumstances. They will travel to every Indian state and spotlight all 21 disabilities listed in the Rights of PWD Act. Every week we will feature a different bird -- of a different colour, creed, gender and ability -- determinedly flying forward into windblown skies. 
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "60px",
          marginBottom: "30px",
        }}
        onClick={() => document.getElementById('allstories').scrollIntoView({
          behavior: 'smooth'
        })
        }
      >
        <span className={styles.scrollDown}>
          <span className={styles.mouse}>
            <span></span>
          </span>
        </span>
        <h2 className={styles.addHover}>
          View Stories
        </h2>
      </div>
    </section>
  )
}

export default Landing
