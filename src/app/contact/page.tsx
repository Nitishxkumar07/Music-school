"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Meteors } from '@/components/ui/meteors'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { div } from 'framer-motion/client'

function page() {
    return (
        <div className='bg-black relative min-h-screen justify-center text-white '>
            <Meteors number={40} />
            <div className='mt-36 space-y-12 flex flex-col text-center'>
                <h1 className='text-6xl! md:text-4xl sm:text-3xl font-bold text-cyan-400'>Contact Us</h1>
                <p className='text-lg text-gray-300 lg:px-52 px-20 line-clamp-6 md:line-clamp-2 lg:line-clamp-2'>We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>
            </div>
            <div className='border border-transparent bg-gray-800 m-12 rounded-3xl min-h-screen flex flex-col'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center px-20 py-10 gap-6 space-y-10'>
                    <input onChange={(e) => e.target.value} type="text" placeholder='Your Name' className='border border-gray-700 rounded-4xl px-6 py-4 w-full focus:border-cyan-500 transition-all resize-none outline-none' />
                    <input type="email" placeholder='Your Email' className='border border-gray-700 lg:ml-10 rounded-4xl px-6 py-4 w-full focus:border-cyan-500 transition-all resize-none outline-none' />
                    <input type="text" placeholder='subject' className='border border-gray-700 rounded-4xl px-6 py-4 w-full focus:border-cyan-500 transition-all resize-none outline-none' />
                </div>
                <div className='flex flex-col space-y-8 justify-center'>
                    <textarea rows={8} placeholder='Write your massage' className='border border-gray-700 rounded-4xl px-6 py-4 max-w-5xl md:w-3xl lg:w-5xl focus:border-cyan-500 m-10 transition-all resize-none outline-none' />
                    <br />
                    <button onClick={(e) => e.preventDefault()} className='text-white text-lg font-semibold bg-cyan-500 shadow-cyan-300 px-6 py-4 rounded-3xl mb-6 max-w-fit max-h-fit opacity-90 ml-20 hover:scale-105 hover:opacity-100'>
                        <Link href={'#'} className='text-center'>Send Message→</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
