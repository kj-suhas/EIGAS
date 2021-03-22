import React, { useRef } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
// import { SRLWrapper } from "simple-react-lightbox"

const itemsPerPage = 1
let resetTimeout

const Corousal = ({ userData }) => {
  const carouselRef = useRef(null)
  const totalPages = Math.ceil(userData[0]?.CDN_Photo_URL.length / itemsPerPage)
  const photos = userData[0]?.CDN_Photo_URL
  const altText = userData[0]?.Alt_Photos.split("~")
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="/lightbox/lightbox.min.css"
        />
        <script
          src="/lightbox/lightbox.min.js"
          />
      </Helmet>

      <Carousel
        ref={carouselRef}
        enableAutoPlay
        autoPlaySpeed={5000}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 5000) // same time
          }
        }}
        itemsToShow={itemsPerPage}
      >
        {photos?.map((photoUrl, key) => (
          // <SRLWrapper>
          <div key={photoUrl.url}>
            {/* <a href={photoUrl.url}> */}
            <a href={photoUrl.url} data-lightbox="profilePic">
              <img
                class="carousel-image"
                src={photoUrl.url}
                alt={altText[key]}
              />
            </a>

            {/* </a> */}
          </div>
          // </SRLWrapper>
        ))}
      </Carousel>
    </div>
  )
}

export default Corousal
