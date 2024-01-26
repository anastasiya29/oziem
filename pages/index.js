import Head from '@components/Head'
import Banner from '@components/Banner'
import Border from '@components/Border'
import Links from '@components/Links'
import Shows from '@components/Shows'
import Video from '@components/Video'
import Footer from '@components/Footer'

export default function Home() {

  return (
    <div className='container'>
      <Head />
      <Banner />
      <Border />
      <Links />
      <Shows />
      <Video />
      <Footer />
    </div >
  )
}
