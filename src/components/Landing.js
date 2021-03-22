import React from "react"
import * as styles from "../styles/landing.module.css"
import about from "../assets/about.png"
import { Link } from "gatsby"

const Landing = () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.flex}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxHeight: "60%",
          // objectFit: "contain",
          // height: "100vh",
        }}
      >
        <img
          className={styles.landingImg}
          src={about}
          alt="Logo of Everyone is good at something"
        />
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
          // marginTop: "64px",
          fontSize: "16px",
          marginTop: "50px",
          // fontSize: "17px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
          }}
        >
          For those who have habitually attended the India Inclusion Summit
          (IIF) in Bengaluru, its tagline "Everyone is Good at Something" is
          like an old familiar melody. Equally familiar is the recurring image
          of the Inclusion Tree on which birds of different colours perch and...
        </p>
      </div>
      <div className={styles.continueReading}>
        <Link to="/about">
          <p className={styles.addHover}>Continue Reading</p>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          // marginTop: "60px",
          marginBottom: "30px",
        }}
        // onClick={() => document.getElementById('allstories').scrollIntoView({
        //   behavior: 'smooth'
        // })
        // }
      >
        <span className={styles.scrollDown}>
          <span className={styles.mouse}>
            <span></span>
          </span>
        </span>
        <Link to="/#allstories">
          <h2 className={styles.addHover}>View Stories</h2>
        </Link>
      </div>
    </section>
  )
}

export default Landing
