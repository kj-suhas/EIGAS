import React from "react"
import Profile from "../components/Profile"
import Header from "../components/Header"

const profile = ({ location }) => {
  const userData = location.state
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
      }}
    >
      <Header userData={userData} />
      <div
        style={{
          //   marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Profile userData={userData} />
      </div>
    </div>
  )
}

{
  /* <Header /> */
}
{
  /* <div
          style={{
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          <Profile />
        </div> */
}

export default profile
