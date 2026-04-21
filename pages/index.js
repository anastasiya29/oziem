import Banner from '@components/Banner'
import Border from '@components/Border'
import Footer from '@components/Footer'
import Head from '@components/Head'
import Links from '@components/Links'
import Shows from '@components/Shows'
import Socials from '@components/Socials'
import Video from '@components/Video'

export default function Home() {

  return (
    <div className='container'>
      <Head />
      <Socials />
      <Banner />
      <Border />
      <Links />
      <Shows />
      <Border />
      <Video />
      <Footer />
    </div >
  )
}
