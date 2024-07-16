import { Footer } from "../footer";
import Navbar from "../navbar";
import Head from "next/head";

const Main = ({children}) => {
  return (
    <>
    <Head>
      <title>Kamus Digital</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Kamus Digital Projects" />
      <meta name="author" content="Kamus Digital" />
      <link rel="icon" href="/assets/image/logo.png" /> 
    </Head>
      <div className="bg-hero">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  );
};

export default Main;
