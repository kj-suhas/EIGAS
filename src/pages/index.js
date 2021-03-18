import React, { useState } from "react"
import Layout from "../components/Layout"
// import { BrowserRouter as Router, Route } from "react-router"
// import SimpleReactLightbox from "simple-react-lightbox"
import { Provider } from "react-redux"
import store from "../store"

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

  // data.allAirtable.nodes.forEach(( node ) => {
  //   createPage({
  //     path: `profile/${node.data.Name}`,
  //     component: path.resolve(`./src/pages/profile.js`),
  //     context: {
  //       profileName: node.data.Name,
  //     },
  //   })
  // })

  return (
    <Provider store={store}>
      <Layout data={data} profileData={profileData} setProfile={setProfile} />
    </Provider>
  )
}

export default Home
