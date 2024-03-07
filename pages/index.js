import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Head from 'next/head'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suvigya Mishra Projects</title>
        <meta name="description" content="Suvigya Mishra Projects" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Navbar />
      <Main />
      <Projects />
    </div>
  )
}
