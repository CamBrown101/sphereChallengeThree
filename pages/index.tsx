import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopSection from "../components/TopSection";
import MiddleSection from "../components/MiddleSection";
import BottomSection from "../components/BottomSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sphere Landing Page</title>
        <meta name="description" content="Cam Brown's Sphere Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
