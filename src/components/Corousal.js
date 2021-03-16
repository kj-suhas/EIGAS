import React from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"

const Corousal = ({ userData }) => {
  console.log(userData)
  const photos = userData?.data.CDN_Photo_URL
  console.log(photos)
  return (
    <div>
      <Carousel>
        {photos?.map(photoUrl => (
          <div key={photoUrl.url}>
            <Link to="/">
              <img src={photoUrl.url} alt="" />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Corousal
