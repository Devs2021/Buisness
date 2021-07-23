import Head from 'next/head'
import Hero from '../components/signup-page/Hero'
import SignupForm from '../components/signup-page/SignupForm'
import 'tailwindcss/tailwind.css'


const signup = () => {
    return (
        <div>
            <Head>
        <title>Sign Up</title>
        <meta name="description" content="Empower your  Business, Skill, Education and Project with professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <main>
                <Hero/>
                <SignupForm/>
            </main>
        </div>
    )
}

export default signup
