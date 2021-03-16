// const path = require(`path`)
// Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`)
// }
// Create blog pages dynamically
exports.createPages = ({ graphql, boundActionCreators }) => {
  const path = require(`path`)
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
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
    `).then(result => {
      result.data.allAirtable.nodes.forEach(({ node }) => {
        console.log("Data ---- ", node)
        createPage({
          path: `profile`,
          component: path.resolve(`gatsby_eigas/src/components/Showcase.js`),
          context: {
            profileName: node.data.name,
          },
        })
      })
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
}
