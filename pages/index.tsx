import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className="home_page">
      <Head>
        <title>ReactJS разработчик Аверкиев</title>
        <meta
          name="description"
          content="Личный сайт Frontend-разработчика Аверкиева Константина"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home-page" className={styles.wrapper}>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
