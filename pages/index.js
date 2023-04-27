import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Head from 'next/head'
import Image from 'next/image'
import About from '@/components/About'

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
    </div>
  )
}
