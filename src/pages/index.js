import React, { useState } from "react"
import Layout from "../components/Layout"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
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

const Home = ({ data }) => {
  const [profileData, setProfileData] = useState([])

  const setProfile = userData => {
    setProfileData(userData)
  }

  return (
    <Router>
      <Route
        path="/"
        component={() => (
          <Layout
            data={data}
            profileData={profileData}
            setProfile={setProfile}
          />
        )}
      />
      {/* <Route
        path="/profile"
        component={() => (
          <Profile
            data={data}
            profileData={profileData}
            setProfile={setProfile}
          />
        )}
      /> */}
    </Router>
  )
}

export default Home
