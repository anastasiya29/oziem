import Head from '@components/Head'
import Banner from '@components/Banner'
import Links from '@components/Links'
import BIT from '@components/BIT'
import Footer from '@components/Footer'

export default function Home() {

  return (
    <div className='container'>
      <Head />
      <Banner />
      <Links />
      <BIT />
      <Footer />
    </div >
  )
}
