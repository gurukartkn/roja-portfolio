import Head from "next/head";
import { About, Works, Contact, Skills } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roja | Front End Developer</title>
        <meta
          name="description"
          content="Results-driven computer science student passionate about
developing front end applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Works />
      <Contact />
      <Skills />
    </div>
  );
}
