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

  let toPublish = []
  for (let i = 0; i < data?.allAirtable.nodes.length; i++) {
    if (data.allAirtable.nodes[i].data.Status === "ToBePublished") {
      toPublish.push(data.allAirtable.nodes[i])
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#E5E5E5",
        }}
      >
        <Landing data={toPublish} />

        <div id="allstories">
          {/* <Link
            to="/profiles"
            state={toPublish}
            profileData={profileData}
            setProfile={setProfile}
            handleShow={handleShow}
            show={show}
          > */}
          <Header2 />
          {/* </Link> */}
          <div
            style={{
              marginTop: "20px",
              paddingBottom: "40px",
            }}
          >
            <Showcase
              data={toPublish}
              profileData={profileData}
              setProfile={setProfile}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
      {/* <Showcase /> */}
    </>
  )
}

export default Layout
