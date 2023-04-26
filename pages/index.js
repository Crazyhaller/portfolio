import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suvigya Mishra Portfolio</title>
        <meta name="description" content="Suvigya Mishra Portfolio" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Navbar />
    </div>
  )
}
