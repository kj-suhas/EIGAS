import React from "react"
import * as styles from "../styles/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import Corousal from "../components/Corousal"
import { SRLWrapper } from "simple-react-lightbox"

const Profile = ({ userData, showFullImg }) => {
  return (
    <section
      style={{
        backgroundColor: "#E5E5E5",
        marginTop: "0px",
      }}
    >
      <div className={styles.profileCard}>
        {/* <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundPosition: "center top",
            }}
            src={userData?.data.CDN_Photo_URL[0].url}
            alt=""
          /> */}
        <Corousal userData={userData} />

        <h3
          style={{
            fontWeight: "100",
            fontSize: "25px",
            fontFamily: "Times New Roman",
            marginTop: "20px",
          }}
        >
          {userData?.data.Quote}
        </h3>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "Verdana",
            marginTop: "10px",
            fontWeight: "normal",
            letterSpacing: "0.6px",
          }}
        >
          {userData?.data.Website_Content.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p>
          <p>
            {userData?.data.Name} can be reached on 99999 99999; his email id is{" "}
            {userData?.data.Created_By.email}
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
    </section>
  )
}

export default Profile
