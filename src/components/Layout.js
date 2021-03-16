import React, { useState } from "react"
import Landing from "./Landing"
import "../styles/global.css"
import Showcase from "../components/Showcase"
import Header2 from "../components/Header2"
import { Link } from "gatsby"

const Layout = ({ children, data, profileData, setProfile }) => {
  console.log(data)
  const [show, setShow] = useState(true)

  const handleShow = value => {
    setShow(value)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#E5E5E5",
        }}
      >
        <Landing data={data} />

        <div>
          <Link
            to="/profiles"
            state={data}
            profileData={profileData}
            setProfile={setProfile}
            handleShow={handleShow}
            show={show}
          >
            <Header2 />
          </Link>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          <Showcase
            data={data}
            profileData={profileData}
            setProfile={setProfile}
          />
        </div>
        <div>{children}</div>
      </div>
      {/* <Showcase /> */}
    </>
  )
}

export default Layout
