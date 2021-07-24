import Head from "next/head"
import Hero from "../components/about-page/Hero"
import Info from "../components/about-page/Info"
import Navbar from "../components/ui/Navbar"



const about = () => {
    return (
        <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Empower your  Business, Skill, Education and Project with professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar cta={true} />

      <main className="overflow-hidden">
            <Hero/>
            <Info/>
          </main>
            
        </div>
    )
}

export default about
