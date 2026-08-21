import { Header } from '@/components/site/Header'
import { Hero } from '@/components/site/Hero'
import { Pillars } from '@/components/site/Pillars'
import { Score7 } from '@/components/site/Score7'
import { Roadmap } from '@/components/site/Roadmap'
import { News } from '@/components/site/News'
import { Manifesto } from '@/components/site/Manifesto'
import { Faq } from '@/components/site/Faq'
import { Newsletter } from '@/components/site/Newsletter'
import { Footer } from '@/components/site/Footer'

function App() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Score7 />
        <Roadmap />
        <News />
        <Manifesto />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
