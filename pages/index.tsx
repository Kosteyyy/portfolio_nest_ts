import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ReactJS разработчик Аверкиев</title>
        <meta
          name="description"
          content="Личный сайт Frontend-разработчика Аверкиева Константина"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
