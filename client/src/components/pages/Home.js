
import React from "react";
import ImageSlider from "./ImageSlider";
import images from "./image.js";
import "./Home.css";
import "./ImageStyle.css";

function Home() {
  return (
    <div className="App">
      <div className="info">
        <h1>BITS Pilani, Pilani Campus</h1>
        <p>
          The Birla Institute of Technology & Science (BITS) Pilani is an
          all-India Institute for higher education. The primary motive of BITS
          is to "train young men and women able and eager to create and put into
          action such ideas, methods, techniques and information". The Institute
          is a dream come true of its founder late Mr G.D.Birla - an eminent
          industrialist, a participant in Indian freedom struggle and a close
          associate of the Father of India- the Mahatma Gandhi. What started in
          early 1900s as a small school, blossomed into a set of colleges for
          higher education, ranging from the Humanities to Engineering until
          1964 when all these colleges amalgamated to culminate into a unique
          Indian university of international standing. This university was
          christened as the Birla Institute of Technology and Science, Pilani,
          known to many as BITS, Pilani.
        </p>
      </div>

      <div className="info">
        <p>
          The Birla Institute of Technology & Science (BITS) Pilani is an
          all-India Institute for higher education. The primary motive of BITS
          is to "train young men and women able and eager to create and put into
          action such ideas, methods, techniques and information". The Institute
          is a dream come true of its founder late Mr G.D.Birla - an eminent
          industrialist, a participant in Indian freedom struggle and a close
          associate of the Father of India- the Mahatma Gandhi. What started in
          early 1900s as a small school, blossomed into a set of colleges for
          higher education, ranging from the Humanities to Engineering until
          1964 when all these colleges amalgamated to culminate into a unique
          Indian university of international standing. This university was
          christened as the Birla Institute of Technology and Science, Pilani,
          known to many as BITS, Pilani. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia iure aliquid deleniti cum eum consequuntur
          architecto quis minus aperiam recusandae reiciendis sequi eaque, optio
          necessitatibus culpa. Quia aliquid dolorum nostrum? Architecto,
          ducimus!
        </p>
        <p>
          Enim quasi suscipit fugiat, vel repudiandae excepturi dolore rerum
          maxime corporis non blanditiis veniam officia magnam, beatae
          voluptatibus dignissimos doloremque accusamus quibusdam deserunt sunt
          nesciunt minus magni! Pariatur? Nemo, eaque. Vel nam possimus in
          recusandae tenetur corporis error aliquid delectus quos ab dignissimos
          minima deleniti laborum architecto numquam natus quia illum sapiente
          cupiditate suscipit, non corrupti rem accusamus? Totam aliquam
          voluptate commodi ipsum reiciendis molestiae nostrum perspiciatis
          impedit optio eos. Nulla velit facilis, minima praesentium ullam id ad
          quibusdam amet magni aspernatur harum illum quae voluptate numquam
          delectus! Numquam, facilis incidunt amet error alias ipsa quod nisi
          odio aut quasi blanditiis ducimus debitis veniam eligendi voluptatem
          sapiente! Ad, cumque incidunt quo commodi magnam in esse assumenda
          ratione magni?
        </p>
      </div>
      <div className="info">
        <p>
          BITS has a remarkable placement record and most students have their
          careers charted out well before they complete graduation. BITS has a
          remarkable placement record and most students have their careers
          charted out well before they complete graduation. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Ducimus molestias recusandae
          assumenda distinctio ipsa! Alias nam expedita quas harum tenetur.
          Similique aut vero id ex asperiores. Saepe aspernatur qui quis.
          Reprehenderit, porro rem. Explicabo ducimus pariatur expedita,
          temporibus magni, ratione, debitis aliquid eligendi eius corporis
          rerum unde tempora! Ipsum quas, incidunt sunt impedit pariatur
          delectus minus voluptate sapiente tempore omnis! Ad esse aut,
          molestiae pariatur doloribus iusto, officia debitis numquam sunt
          doloremque sequi aspernatur laborum alias, repudiandae at voluptatum
          labore. Corrupti, pariatur accusamus eligendi quas eaque est. Odit,
          incidunt alias! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eaque tenetur eveniet doloremque odio fugit dicta sed iste optio
          tempora fuga at, fugiat dolores distinctio est provident quam,
          accusantium, veniam praesentium.
        </p>
      </div>
      <div className="Slider-1">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default Home;
