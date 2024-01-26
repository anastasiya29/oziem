import Banner from '@components/Banner'
import Border from '@components/Border'
import Footer from '@components/Footer'
import Head from '@components/Head'
import Links from '@components/Links'
import Shows from '@components/Shows'
import Video from '@components/Video'

export default function Home() {

  return (
    <div className='container'>
      <Head />
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
