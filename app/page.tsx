'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"


export default function Home() {
  let router = useRouter();

  useEffect(()=>{
    function run(){
      setTimeout(()=> router.push('/namata'),5000)
    }
    run();
  },[])
  
  return (
    <main className="pt-20 flex flex-col items-center gap-8">
      <h1 className="fa fa-spinner text-6xl animate-[spin_700ms_infinite]"></h1>
      <h1 className="text-3xl">Loading...</h1>
    </main>
  )
}
