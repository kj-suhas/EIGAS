import React from "react"
import Header2 from "../components/Header2"
import { Link } from "gatsby"
import * as stylesShowcase from "../styles/profile.module.css"
import * as navContainer from "../styles/navbar.module.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Showcase = ({ data, profileData, setProfile }) => {
  console.log(data)
  return (
    <div className={`${stylesShowcase.showcase} `}>
      <div className={`${navContainer.navCont}`}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="20px">
            {data?.allAirtable.nodes.map(user => (
              <div
                key={user.id}
                onClick={() => {
                  setProfile(user)
                  console.log(profileData)
                }}
              >
                <Link to="/profile" state={user}>
                  <div className={stylesShowcase.profilesCard}>
                    <img
                      src={user.data.CDN_Photo_URL[0].url}
                      alt=""
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        backgroundPosition: "center top",
                      }}
                    />
                    <div
                      style={{
                        padding: "3px 8px 3px 3px",
                        backgroundColor: "#FBCB57",
                        color: "black",
                        width: "fit-content",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "lighter",
                        }}
                      >
                        {user.data.Name}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "25px",
                      }}
                    >
                      {user.data.Quote}
                    </h3>
                    <p>
                      {user.data.Website_Content
                        ? `${user.data.Website_Content.slice(0, 500)}...`
                        : ``}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
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
