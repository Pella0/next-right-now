/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Projets = ({ Projets }) => {
  const router = useRouter();
  const { id, Projets } = router.query;

  const [projets, setProjets] = useState([]);
  /* const [projetsScreen, setProjetsScreen] = useState([]); */
  /*  const data = props.match.params; */

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projets/${data.id}`)
      .then((reponse) => {
        console.log(reponse);
        setProjets(reponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="projet-container">
      <div className="projet-infos">
        <img
          className={`logo-${projets.title}`}
          src={projets.Logo}
          alt="logo"
        />
        <div className="infos-details">
          <p>{projets.Projet_Description}</p>
          <p>Methode : {projets.Methode}</p>
          <p>{projets.Details_Client}</p>
          <Link className="Link" to={projets.Lien_Client}>
            <div className="Client" alt="client" />
          </Link>
          <p>Techno utilisé : {projets.Name}</p>
          <img className="Thechno" src={techMedium} alt="client" />
        </div>
      </div>

      <div className="CarrouselClient">
        <Carousel autoPlay>
          <div>
            <Image
              src="/images/Ju.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="/images/Ju.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="/images/Ju.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projets;
