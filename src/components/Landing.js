import React from "react"
import * as styles from "../styles/landing.module.css"

const Landing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.flex}>
        <img
          className={styles.landingImg}
          src="https://images.unsplash.com/photo-1562996036-45f05af24231?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
          alt=""
        />
        <ul className={styles.landingUl}>
          <li>India</li>
          <li>Inclusion</li>
          <li>Foundation</li>
        </ul>
      </div>
      <div className={styles.h2Div}>
        <h2 className={styles.landingh2}>
          <span>everyone</span>{" "}
          <span>
            <div className={styles.dot}></div> is{" "}
            <div className={styles.dot}></div>
          </span>{" "}
          <span>good </span>
          <span>
            <div className={styles.dot}></div> at{" "}
            <div className={styles.dot}></div>
          </span>{" "}
          <span>something</span>
        </h2>
      </div>
      <div
        style={{
          marginTop: "66px",
          fontSize: "17px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          officiis corporis doloribus quas laborum, magni ullam vero quos est
          velit laboriosam recusandae fugit dignissimos eligendi, rerum delectus
          distinctio, totam fuga eius? Laudantium dolorem qui sapiente atque
          iusto saepe nemo repudiandae magnam doloribus aliquid excepturi fugit
          eius at, perspiciatis similique suscipit ipsam. Natus perferendis
          reprehenderit maxime a, id dignissimos laudantium voluptates!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          repellat quis nostrum est accusamus necessitatibus fuga nisi iste
          doloremque obcaecati! Voluptas laboriosam magnam aliquid aliquam,
          saepe enim! At, mollitia sint quae minima dicta quibusdam, aspernatur
          beatae recusandae quo deleniti, rerum esse quod obcaecati repellat
          ipsam ex corporis minus possimus. Commodi, in! Aut delectus
          perferendis dolorem laborum maxime quod adipisci rem ut? Excepturi
          voluptatem iste voluptates quasi illo maiores tenetur, laboriosam,
          distinctio tempora magnam voluptas dolorum optio eos asperiores hic
          nisi quisquam doloremque similique omnis fugit quis quia accusantium?
          Fuga odio ipsa debitis ratione quisquam velit voluptate, repudiandae
          delectus explicabo libero ea. Adipisci rerum commodi iure officiis
          odio, itaque exercitationem ex obcaecati quibusdam rem qui. Obcaecati
          quis, vel quia id eveniet doloremque. Eligendi qui inventore .
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "70px",
        }}
      >
        <span className={styles.scrollDown}>
          <span className={styles.mouse}>
            <span></span>
          </span>
        </span>
        <h2
          className={styles.addHover}
        >
          View Stories
        </h2>
      </div>
    </section>
  )
}

export default Landing
