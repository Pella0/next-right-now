import axios from "axios";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "./dynamic-content.module.css";

const getRandomFact = () =>
  axios
    .get("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((res) => res.data.text);

export default function Post({ initialContactList = [] }) {
  const [fact, setFact] = useState(initialContactList);
  const handleReload = () => getRandomFact().then(setFact);

  return (
    <Layout pageTitle="Dynamic content">
      <div className={styles.reloadBtnContainer}>
        <button type="button" onClick={handleReload}>
          Load random fact
        </button>
      </div>
      <div className={styles.randomFactContainer}>{fact}</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialContactList: await getRandomFact(),
    },
  };
}
