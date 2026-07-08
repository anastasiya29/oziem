import Banner from '@components/Banner'
import Border from '@components/Border'
import Footer from '@components/Footer'
import Head from '@components/Head'
import Links from '@components/Links'
import Shows from '@components/Shows'
import Video from '@components/Video'
import Merch from '@components/Merch'

export default function Home() {

  return (
    <div className='container'>
      <Head />
      <Banner />
      <Links />
      <Shows />
      <Merch />
      <Video />
      <Footer />
    </div >
  )
}
