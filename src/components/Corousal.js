import React, { useRef } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../styles/corousel.module.css"
import Expand from "../assets/expand.png"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"

const itemsPerPage = 1
let resetTimeout

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Corousal = ({ userData }) => {
  // const carouselRef = useRef(null)
  const totalPages = Math.ceil(userData[0]?.CDN_Photo_URL.length / itemsPerPage)
  const photos = userData[0]?.CDN_Photo_URL
  const altText = userData[0]?.Alt_Photos.split("~")

  // const corouselData = photos.push({
  //   url: "http://media.w3.org/2010/05/sintel/trailer.ogv",
  // })

  console.log(photos)
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {photos?.map((photoUrl, key) => (
          <>
            <SwiperSlide>
              <span>
                <img
                  style={{
                    height: "85%",
                  }}
                  src={photoUrl.url}
                  alt=""
                />
              </span>
            </SwiperSlide>
          </>
        ))}
        <SwiperSlide>
          <video
            id="video"
            controls="controls"
            preload="none"
            width="100%"
            height="auto"
            poster="http://media.w3.org/2010/05/sintel/poster.png"
          >
            <source
              id="ogv"
              src="http://media.w3.org/2010/05/sintel/trailer.ogv"
              type="video/ogg"
            />
          </video>
        </SwiperSlide>
      </Swiper>
      {/* <Helmet>
        <link rel="stylesheet" href="/lightbox/lightbox.min.css" />
        <script src="/lightbox/lightbox.min.js" />
      </Helmet>

      <Carousel itemsToShow={itemsPerPage}>
        {photos?.map((photoUrl, key) => (
          // <SRLWrapper>
          <div key={photoUrl.url}>
            {/* <a href={photoUrl.url}> 
            {/* <a href={photos.url} data-lightbox="profilePic">
              <img
                class="carousel-image"
                src={photoUrl.url}
                alt={altText[key]}
              />
            </a> 

            <img class="carousel-image" src={photoUrl.url} alt={altText[key]} />

            <video
              id="video"
              controls="controls"
              preload="none"
              width="600"
              poster="http://media.w3.org/2010/05/sintel/poster.png"
            >
              <source
                id="mp4"
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
              <source
                id="webm"
                src="http://media.w3.org/2010/05/sintel/trailer.webm"
                type="video/webm"
              />
              <source
                id="ogv"
                src="http://media.w3.org/2010/05/sintel/trailer.ogv"
                type="video/ogg"
              />

              <track
                kind="subtitles"
                label="English subtitles"
                src="subtitles_en.vtt"
                srclang="en"
                default
              ></track>

              <track
                kind="subtitles"
                label="Deutsche Untertitel"
                src="subtitles_de.vtt"
                srclang="de"
              ></track>
            </video>

            {/* </a> 
          </div>
          // </SRLWrapper>
        ))}
      </Carousel> */}
      <div className={styles.expandImg}>
        {photos.map(photoUrl => console.log(photoUrl.url))}
        <a href={photos[0].url} data-lightbox="profilePic">
          <img src={Expand} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Corousal
