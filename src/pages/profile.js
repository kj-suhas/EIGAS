/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react"
import Profile from "../components/Profile"
import Header from "../components/Header"
import * as styles from "../styles/profile.module.css"
import Subscribe from "../components/Subscribe"
import * as stylesNavbar from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDove, faExpand } from "@fortawesome/free-solid-svg-icons"
import bird from "../assets/bird.png"
import { Link } from "gatsby"
import HeaderHamburger from "../assets/hamburger.png"

// Subscribe
import * as stylesHam from "../styles/hamburger.module.css"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import { graphql } from "gatsby"

export const query = graphql`
  query Query2 {
    allAirtable(filter: { table: {} }) {
      nodes {
        table
        data {
          Name
          Alt_Photos
          Alt_Text_Photo1
          Alt_Text_Photo2
          Alt_Text_Photo3
          Alt_Text_Photo4
          Alt_Text_Photo5
          Alt_Text_Video
          CDN_Photo_URL {
            url
          }
          Changed_By {
            email
            id
            name
          }
          Changed_On
          Created_By {
            email
            id
            name
          }
          Created_On
          Disability
          Gender
          ID
          Instagram_Content
          Language
          Photos {
            filename
            url
          }
          Quote
          State
          Status
          Video
          Website_Content
        }
        recordId
      }
    }
  }
`

const profile = ({ location, data }) => {
  const allUserData = data.allAirtable.nodes.map(node => node.data)
  console.log(allUserData)

  console.log(location.pathname)
  const personNameUrl = location.pathname.split("/")[2]
  console.log(personNameUrl)
  // const [allUserData, setAllUserData] = useState(data)
  const [showSubscribe, setShowSubscribe] = useState(false)
  console.log(showSubscribe)

  const vijay = value => {
    setShowSubscribe(value)
  }

  let allUsers = []
  useEffect(() => {
    allUsers = localStorage.getItem("data")
    allUsers = JSON.parse(allUsers)
    // console.log(allUsers)
    // setAllUserData([...allUsers])
  }, [showSubscribe])

  const profileUser = allUserData.filter(person => {
    console.log(person.Name)
    if (person.Status === "ToBePublished") {
      let personName = person.Name.toLowerCase().trim()
      personName = personName.replace(/\s/g, "-")
      // console.log(personName)

      return personNameUrl === personName
    }
  })

  let name = profileUser[0]?.Name.toLowerCase().trim()
  let nameDesktop = name?.split(" ")
  let nameMobile = name?.split(" ")[0]

  // const [showFullImg, setShowFullImg] = useState(false)

  // const showImg = value => {
  //   setShowFullImg(value)
  // }

  const getProfile = () => (
    <div
      style={{
        width: "100%",
        backgroundColor: "#E5E5E5",
      }}
    >
      {/* <div role="presentation"> */}
      {/* <Header
          profileUser={profileUser}
          onClick={() => {
            vijay(!showSubscribe)
          }}
        /> */}

      {/* </div> */}

      <section className={stylesNavbar.navbar}>
        <div className={`${stylesNavbar.navCont} ${stylesNavbar.navFlex}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              fontSize: "31px",
              fontWeight: "bolder",
            }}
          >
            <Link to="/">
              <img
                src={bird}
                alt="Logo of Everyone is good at something"
                className={stylesNavbar.logoContainer}
              />
            </Link>

            <h2 className={stylesNavbar.mediah2}>{nameMobile}</h2>
            <h2 className={stylesNavbar.headerh2}>
              {nameDesktop?.map((word, i) => (
                <span key={i}>
                  {" "}
                  {word}{" "}
                  {i !== nameDesktop.length - 1 && (
                    <div className={stylesNavbar.headerDot}></div>
                  )}
                </span>
              ))}
            </h2>
          </div>
          {/* <h2 className={stylesNavbar.headerh1}>
          {userData?.data.Name}
        </h2> */}
          <ul>
            <li>
              <h1
                style={
                  {
                    // marginRight: "30px",
                  }
                }
              >
                <Link
                  style={
                    {
                      // marginBottom: "20px",
                    }
                  }
                  to="/#allstories"
                >
                  All
                </Link>
              </h1>
            </li>

            <li>
              <img
                className={stylesNavbar.hamburger}
                onClick={() => vijay(!showSubscribe)}
                src={HeaderHamburger}
              />
            </li>
          </ul>
        </div>
      </section>
      {showSubscribe && (
        <section
          style={{
            backgroundColor: "#E5E5E5",
          }}
        >
          <div className={`${stylesHam.profileCard} ${stylesHam.flex}`}>
            <span className={`${stylesHam.closeIcon} ${stylesHam.socialStyle}`}>
              <FontAwesomeIcon
                icon={faTimes}
                size={"2x"}
                onClick={() => vijay(!showSubscribe)}
              />
            </span>
            <div className={stylesHam.form}>
              <span
                className={`${stylesHam.iconClass} ${stylesHam.socialStyle}`}
              >
                <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                <FontAwesomeIcon icon={faFacebook} size={"2x"} />
                <FontAwesomeIcon icon={faTwitter} size={"2x"} />
              </span>

              <form>
                <div className={stylesHam.formControl}>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Enter email Id"
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  className={stylesHam.btn}
                />
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "182px",
                }}
              >
                <h2
                  style={{
                    color: "#51566f",
                    borderBottom: "2px solid black",
                    fontWeight: "bold",
                  }}
                >
                  English
                </h2>
                <h2
                  style={{
                    color: "#51566f",

                    fontWeight: "bold",
                  }}
                >
                  Hindi
                </h2>
              </div>
            </div>
          </div>
        </section>
      )}
      <div
        className={styles.dataContainer}
        // style={{
        //   marginTop: "0px",
        //   paddingBottom: "40px",
        // }}
      >
        {!showSubscribe && (
          <Profile
            profileUser={profileUser}
            location={location}
            onClick={() => console.log("profile Clicked")}
          />
        )}
      </div>
    </div>
  )

  useEffect(() => {
    getProfile()
  }, [showSubscribe])

  console.log(profileUser)
  return getProfile()
}

export default profile
