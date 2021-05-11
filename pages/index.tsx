import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sphere Landing Page</title>
        <meta name="description" content="Cam Brown's Sphere Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
}
