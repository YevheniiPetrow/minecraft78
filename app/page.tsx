'use client'
import {Header} from "@/components/header";
import dynamic from 'next/dynamic'


const Main = dynamic(() => import('@/components/main'), { ssr: false })
  const Calculator = dynamic(() => import('@/components/Calculator'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
export default function Home() {


  return (
      <main className="bg-[url('/bgBG.png')] bg-cover text-foreground">
    <Header/>
      <Main/>
      <Calculator />
      <Footer/>
    </main>
  )
}




