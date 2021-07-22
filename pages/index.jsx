import Head from 'next/head'
import Hero from '../components/home-page/Hero'
import 'tailwindcss/tailwind.css'
import Service from '../components/home-page/Service'
import Features from '../components/home-page/Features'
import Statistics from '../components/home-page/Statistics'
import Projects from '../components/home-page/Projects'
import Clients from '../components/home-page/Clients'
import Contact from '../components/home-page/Contact'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="Empower your  Business, Skill, Education and Project with professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Hero/>
       <Service/>
       <Features/>
       <Statistics/>
       <Projects/>
       <Clients/>
       <Contact/>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
