'use client'
import dynamic from 'next/dynamic'

const Header = dynamic(() =>
        import('@/components/Header').then(mod => mod.default || mod.Header),
    { ssr: false }
)

const Main = dynamic(() =>
        import('@/components/Main').then(mod => mod.default || mod.Main),
    { ssr: false }
)

const Calculator = dynamic(() =>
        import('@/components/Calculator').then(mod => mod.default || mod.Calculator),
    { ssr: false }
)

const Footer = dynamic(() =>
        import('@/components/Footer').then(mod => mod.default || mod.Footer),
    { ssr: false }
)

export default function Home() {
  return (
      <main className="bg-[url('/bgBG.png')] bg-cover text-foreground">
        <Header />
        <Main />
        <Calculator />
        <Footer />
      </main>
  )
}




