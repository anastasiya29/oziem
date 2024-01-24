import Head from 'next/head'
import Banner from '@components/Banner'
import Links from '@components/Links'
import BIT from '@components/BIT'
import Footer from '@components/Footer'

export default function Home() {
  var description = 'Official website for the punk rock band OZIEM from Manchester, NH';
  var image = 'https://www.oziemtheband.com/squidzilla-album-art-700.png';

  return (
    <div className='container'>
      <Head>
        <title>OZIEM</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="OZIEM" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oziemtheband.com/" />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content="OZIEM" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />

        <script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
      </Head>

      <Banner />
      <Links />
      <BIT />
      <Footer />
    </div >
  )
}
