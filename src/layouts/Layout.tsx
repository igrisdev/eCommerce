import { Container } from '../components/general/Container'
import { Footer } from '../components/general/Footer'
import { Header } from '../components/general/Header'

interface iLayout {
  children: React.ReactNode
}

export const Layout = ({ children }: iLayout) => {
  return (
    <>
      <Header />

      <Container element='main' className='pt-[120px] lg:pt-[71px] relative'>
        {children}
      </Container>

      <Footer />
    </>
  )
}
