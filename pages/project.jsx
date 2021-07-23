import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import DoneProjects from '../components/project-page/DoneProjects'
import FutureProjects from '../components/project-page/FutureProjects'
import Hero from '../components/project-page/Hero'
import TopProjects from '../components/project-page/TopProjects'


const project = () => {
    return (
        <div >
      <Head>
        <title>Project</title>
        <meta name="description" content="Empower your  Business, Skill, Education and Project with professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main>
            <Hero/>
            <TopProjects/>
            <DoneProjects/>
            <FutureProjects/>
          </main>
        </div>
    )
}

export default project
