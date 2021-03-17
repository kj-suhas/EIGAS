import React, { useRef } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
// import { SRLWrapper } from "simple-react-lightbox"

const itemsPerPage = 1
let resetTimeout

const Corousal = ({ userData }) => {
  const carouselRef = useRef(null)
  const totalPages = Math.ceil(
    userData?.data.CDN_Photo_URL.length / itemsPerPage
  )
  const photos = userData?.data.CDN_Photo_URL
  const altText = userData?.data.Alt_Photos.split("~")
  return (
    <div>
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
                <img src={photoUrl.url} alt={altText[key]} />
              {/* </a> */}
            </div>
          // </SRLWrapper>
        ))}
      </Carousel>
    </div>
  )
}

export default Corousal
