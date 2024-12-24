import { Aside } from '../components/general/Aside'
import { Container } from '../components/general/Container'
import { Footer } from '../components/general/Footer'
import { Header } from '../components/general/Header'

import { useStorDom } from '../stores/storeDom'

interface iLayout {
  children: React.ReactNode
}

export const Layout = ({ children }: iLayout) => {
  const { showAside } = useStorDom()
  return (
    <>
      <Header />

      {showAside && <Aside />}

      <Container element='main' className='pt-[120px] lg:pt-[71px]'>
        {children}
      </Container>

      <Footer />
    </>
  )
}
