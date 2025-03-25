import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative bg-[url(../assets/bg-starts.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10 px-28 py-16">
          {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-[194px]" />
          
          {/* Stripes */}
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_12.5%,transparent_12.5%,transparent)] bg-[length:100%_8px]" />
          
          {/* Sign In */}
          <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className='h-5 w-5 text-gray-500'/>
            </div>

            <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
          </a>

          {/* Hero */}
          <div className='space-y-5'>
            <Image src={nlwLogo} alt="NLW SpaceTime"/>

          <div className='max-w-[420px] space-y-1'>
            <h1 className='text-[40px] font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>

          <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600' href=''>CADASTRAR LEMBRANçA</a>
          </div>
          </div>


      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-starts.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma lembrança, comece a{' '} 
          <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
          </div>
      </div>
    </main>
  )
}
