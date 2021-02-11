import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./ProjectLien.module.css";

const ProjetsLien = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projets`)
      .then((reponse) => {
        console.log(reponse);
        setProjets(reponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.cardProjet}>
      {projets.map((e) => (
        <div className={styles.card}>
          <Link
            className="Link"
            href="/projets/[id]/[projets]"
            as={`/projets/${e.id}`}
          >
            <div>
              <div className={styles.cardImage}>
                <img src={e.Logo} alt="Orange" />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardDate}>
                  <time>{e.date}</time>
                </div>

                <div className={styles.cardTitle}>
                  <h3>{e.Name}</h3>
                </div>

                <div className={styles.cardExcerpt}>
                  <p>Contexte : {e.projet_context}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjetsLien;
