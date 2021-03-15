import React, { useState } from "react"
import Header2 from "../components/Header2"
import Showcase from "../components/Showcase"
import { Link } from "gatsby"

const profiles = ({ location, profileData, setProfile, show, handleShow }) => {
  return (
    <div
      style={{
        backgroundColor: "#e5e5e5",
      }}
    >
      <Link
        style={{
          marginBottom: "20px",
        }}
        to="/hamburger"
      >
        <Header2 />
      </Link>
      <div
        style={{
          marginTop: "46px",
          marginBottom: "40px",
        }}
      >
        <Showcase
          data={location.state}
          profileData={profileData}
          setProfile={() => setProfile}
        />
      </div>
    </div>
  )
}

export default profiles
