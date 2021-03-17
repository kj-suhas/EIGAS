import React, { useState } from "react"
import Profile from "../components/Profile"
import Header from "../components/Header"
import * as styles from "../styles/profile.module.css"

const profile = ({ location }) => {
  const userData = location.state
  // const [showFullImg, setShowFullImg] = useState(false)

  // const showImg = value => {
  //   setShowFullImg(value)
  // }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#E5E5E5",
      }}
    >
      <Header userData={userData} />
      <div
        className={styles.dataContainer}
        // style={{
        //   marginTop: "0px",
        //   paddingBottom: "40px",
        // }}
      >
        <Profile userData={userData} />
      </div>
    </div>
  )
}

export default profile
