import React from "react"
import * as styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

const Profile = ({ userData }) => {
  console.log(userData)
  return (
    <section
      style={{
        backgroundColor: "#E5E5E5",
        marginTop: "40px",
      }}
    >
      <Link to="/">
        <div className={styles.profileCard}>
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundPosition: "center top",
            }}
            src={userData?.data.CDN_Photo_URL[0].url}
            alt=""
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size={"2x"} />
            <h1>. . .</h1>
            <FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} />
          </div>
          <h3
            style={{
              fontSize: "25px",
            }}
          >
            {userData?.data.Quote}
          </h3>
          <p>{userData?.data.Website_Content}</p>
          <p>
            <p>
              {userData?.data.Name} can be reached on {userData?.data.Gender};
              his Email id is {userData?.data.Created_By.email}
            </p>
          </p>

          <div
            style={{
              display: "flex",
            }}
          >
            Photos:{" "}
            <h4
              style={{
                marginLeft: "9px",
              }}
            >
              Vicky Roy{" "}
              <FontAwesomeIcon
                style={{
                  marginLeft: "10px",
                }}
                icon={faExternalLinkAlt}
                size={"1x"}
              />
            </h4>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            Video:{" "}
            <h4
              style={{
                marginLeft: "9px",
              }}
            >
              Freddie{" "}
              <FontAwesomeIcon
                style={{
                  marginLeft: "10px",
                }}
                icon={faExternalLinkAlt}
                size={"1x"}
              />
            </h4>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Profile
