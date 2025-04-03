import { cookies } from 'next/headers'

import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SingIn } from '@/components/SingIn'
import { Profile } from '@/components/profile'

export default async function Home() {
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.has('token');

  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="relative bg-[url(../assets/bg-starts.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10 px-28 py-16">
          {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-[194px]" />
          
          {/* Stripes */}
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_12.5%,transparent_12.5%,transparent)] bg-[length:100%_8px]" />
          
          {isAuthenticated ? <Profile />  : <SingIn/>}
          <Hero />
          <Copyright />
          </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-starts.svg)] bg-cover">
        <EmptyMemories/>
      </div>
    </main>
  )
}
