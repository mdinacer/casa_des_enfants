import Head from "next/head";
import HomeCatalog from "../components/HomeCatalog";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>La Casa des enfants</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href={"/site.webmanifest"} />
        <meta property="og:title" content="La Casa des enfants" />
        <meta
          property="og:description"
          content="Le juste prix pour satisfaire vos enfants."
        />
        <meta
          property="og:image"
          content="
          /preview.jpg"
        />
      </Head>

      <main className="">
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="catalog">
          <HomeCatalog />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
