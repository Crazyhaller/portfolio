import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Head from 'next/head'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suvigya Mishra Portfolio</title>
        <meta name="description" content="Suvigya Mishra Portfolio" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
