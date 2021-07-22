import Head from 'next/head'
import Hero from '../components/home-page/Hero'
import 'tailwindcss/tailwind.css'

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
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
