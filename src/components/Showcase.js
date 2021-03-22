/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react"
// import Header2 from "../components/Header2"
import { Link } from "gatsby"
import * as stylesShowcase from "../styles/profile.module.css"
import * as navContainer from "../styles/navbar.module.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Subscribe from "./Subscribe"

const Showcase = ({ data, profileData, showModal, setModal, setProfile }) => {
  // localStorage.setItem("data", JSON.stringify(data))
  // const [allUserData, setallUserData] = useState([])

  // let newData = []
  // useEffect(() => {
  //   newData = localStorage.getItem("data")
  //   newData = JSON.parse(newData)
  //   console.log(newData)
  //   setallUserData([...newData])
  // }, [])

  console.log(showModal, setModal)
  const modalData = {
    showModal,
    setModal,
  }
  // console.log("All User s", allUserData)
  console.log(modalData)
  if (showModal) {
    return (
      <div className={`${stylesShowcase.showcase} `}>
        <div className={`${navContainer.navCont}`}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="10px">
              {data &&
                data.map(user => {
                  console.log("user", user)
                  if (user.data.Status === "ToBePublished") {
                    let pathURL = user.data.Name.toLowerCase().trim()
                    pathURL = pathURL.replace(/\s/g, "-")
                    return (
                      <div
                        key={user.data.Name}
                        onClick={() => {
                          setProfile(user)

                          console.log(user.data)
                        }}
                      >
                        {/* <Link to={`/profile/${pathURL}`}> */}
                        <a
                          href={`/inclusive-stories/${pathURL}`}
                          target="_blank"
                        >
                          <div className={stylesShowcase.profilesCard}>
                            <div className={stylesShowcase.imgWrapper}>
                              <img
                                src={user.data.CDN_Photo_URL[0].url}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  backgroundPosition: "center top",
                                }}
                              />
                            </div>

                            <div
                              style={{
                                padding: "3px 6px",
                                backgroundColor: "#FBCB57",
                                color: "black",
                                width: "fit-content",
                                marginTop: "10px"
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Verdana, Regular",
                                  fontSize: "14px",
                                  fontWeight: "lighter",
                                  width: "256px",
                                  height: "24px",
                                }}
                              >
                                {user.data.Name}
                              </span>
                            </div>
                            <h3
                              style={{
                                fontSize: "25px",
                                fontFamily: "Times New Roman",
                                fontWeight: "lighter",
                              }}
                            >
                              {user.data.Quote}
                            </h3>
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: "Verdana",
                              }}
                            >
                              {user.data.Website_Content
                                ? `${user.data.Website_Content.slice(
                                    0,
                                    255
                                  )}...`
                                : ``}
                            </p>
                          </div>
                        </a>
                        {/* </Link> */}
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    )
  } else return <Subscribe showModal={showModal} setModal={setModal} />
}

export default Showcase

{
  /* <div className={stylesShowcase.profilesCard}>
          <div
            style={{
              backgroundColor: "#FBCB57",
            }}
          >
            <h3>Niyas Hussain, New Dehli</h3>
          </div>
          <img
            style={
              {
                // width: "500px",
                //           height: "500px",
              }
            }
            src="https://images.pexels.com/photos/6976101/pexels-photo-6976101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h3
            style={{
              fontSize: "25px",
            }}
          >
            "My mother told me, be your own support"
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            accusamus consectetur quos autem voluptates, vel dolorum. Animi
            dolores repellat illo odio. Debitis voluptatum error accusantium
            harum laboriosam, quisquam saepe illo molestias reiciendis. Eius...
          </p>
        </div>
        <div className={stylesShowcase.profilesCard}>
          <img
            style={
              {
                // width: "500px",
                //           height: "500px",
              }
            }
            src="https://images.pexels.com/photos/6976101/pexels-photo-6976101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h3
            style={{
              fontSize: "25px",
            }}
          >
            "My mother told me, be your own support"
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            accusamus consectetur quos autem voluptates, vel dolorum. Animi
            dolores repellat illo odio. Debitis voluptatum error accusantium
            harum laboriosam, quisquam saepe illo molestias reiciendis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum
            distinctio delectus perspiciatis quos numquam in magnam tempora
            excepturi ullam ea cum, aperiam vitae, eveniet odio! Quasi
            repudiandae officiis voluptatem.
          </p>
        </div>
        <div className={stylesShowcase.profilesCard}>
          <img
            style={
              {
                // width: "500px",
                //           height: "500px",
              }
            }
            src="https://images.pexels.com/photos/6976101/pexels-photo-6976101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h3
            style={{
              fontSize: "25px",
            }}
          >
            "My mother told me, be your own support"
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            accusamus consectetur quos autem voluptates, vel dolorum. Animi
            dolores repellat illo odio. Debitis voluptatum error accusantium
            harum laboriosam, quisquam saepe illo molestias reiciendis. Eius...
          </p>
        </div> */
}
