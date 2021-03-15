import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const Corousal = () => {
  return (
    <Carousel>
      <div>
        <img src="https://images.pexels.com/photos/5706559/pexels-photo-5706559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/6089998/pexels-photo-6089998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/6089998/pexels-photo-6089998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default Corousal
