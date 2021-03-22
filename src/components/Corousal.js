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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"
          integrity="sha512-ZKX+BvQihRJPA8CROKBhDNvoc2aDMOdAlcm7TUQY+35XYtrd3yh95QOOhsPDQY9QnKE0Wqag9y38OIgEvb88cA=="
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"
          integrity="sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ=="
          crossorigin="anonymous"
        />

        {/* <link ref = 'stylesheet' src = "https://panorbit.in/cdn/lightbox.min.css" />
        <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src = "https://panorbit.in/cdn/lightbox-plus-jquery.min.js" />  */}
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
