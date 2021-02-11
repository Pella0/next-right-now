import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import CustomChatbot from "../components/chatbot/CustomChatbot";
import ProjectLien from "../components/ProjectLien";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1>Home page</h1>
      <div className="home-container">
        <div className="ju">
          <Image
            src="/images/Ju.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="juInfos">
          <p>Hello, Je suis Julien, developpeur Web et Web mobile</p>
          <Link href="/">
            <button type="button" className="projetsButton">
              Mes projets
            </button>
          </Link>
        </div>
        <CustomChatbot />
        <ProjectLien />
      </div>
    </Layout>
  );
}
