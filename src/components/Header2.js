import React from "react"
import * as styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDove, faExpand } from "@fortawesome/free-solid-svg-icons"
import bird from "../assets/bird.png"

const Header2 = ({ data }) => {
  return (
    <section className={styles.navbar}>
      <div
        // style={{
        //   maxWidth: "1100px",
        //   margin: "0 auto",
        // }}
        className={`${styles.navCont} ${styles.navFlex}`}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            // margin: "0 10px",
            fontSize: "31px",
            fontWeight: "bolder",
          }}
        >
          {/*  display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            margin: 0 6px;
            font-size: 25px; */}
          {/* <FontAwesomeIcon
            icon={faDove}
            size={"2x"}
            style={{
              marginRight: "20px",
            }}
          /> */}

          <img
            src={bird}
            alt=""
            style={{
              width: "74px",
              height: "97px",
              objectFit: "cover",
              marginRight: "20px",
            }}
          />
          <h2 className={styles.mediah2}>
            e <div className={styles.headerDot}></div> i{" "}
            <div className={styles.headerDot}></div> g{" "}
            <div className={styles.headerDot}></div> a{" "}
            <div className={styles.headerDot}></div> s
          </h2>
          <h2 className={styles.headerh2}>
            everyone <div className={styles.headerDot}></div> is{" "}
            <div className={styles.headerDot}></div> good{" "}
            <div className={styles.headerDot}></div> at{" "}
            <div className={styles.headerDot}></div> something
          </h2>
          {/* </div> */}
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faExpand} size={"2x"} color={"red"} />
          </li>

          <li>
            <FontAwesomeIcon icon={faExpand} size={"2x"} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header2
