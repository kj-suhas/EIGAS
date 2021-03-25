import React, { useState } from "react"
import Landing from "./Landing"
import "../styles/global.css"
import Showcase from "../components/Showcase"
import Header2 from "../components/Header2"
import { Link } from "gatsby"

const Layout = ({ children, data, profileData, setProfile }) => {
  console.log(data)
  const [showModal, setShowModal] = useState(false)
  const setModal = value => {
    setShowModal(value)
  }

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setModal(false)
    setOpen(!open)
  }

  let toPublish = []
  for (let i = 0; i < data?.allAirtable.nodes.length; i++) {
    if (data.allAirtable.nodes[i].data.Status === "Published") {
      toPublish.push(data.allAirtable.nodes[i])
    }
  }

  console.log(toPublish)

  return (
    <>
      <div
        style={{
          backgroundColor: "#E5E5E5",
        }}
      >
        <Landing data={toPublish} />

        <div
          id="allstories"
          style={{
            minHeight: "100vh",
          }}
        >
          {/* <Link
            to="/profiles"
            state={toPublish}
            profileData={profileData}
            setProfile={setProfile}
            handleShow={handleShow}
            show={show}
          > */}
          <Header2
            setModal={setModal}
            showModal={showModal}
            open={open}
            handleClick={handleClick}
          />
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
              showModal={showModal}
              setModal={setModal}
              open={open}
              handleClick={handleClick}
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
