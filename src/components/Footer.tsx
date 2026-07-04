import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer>
            <div className='text-gray-400 text-sm  p-4 px-4 md:px-6 lg:px-8 grid grid-cols-1 text-left space-x-12 space-y-12 md:grid-cols-2 lg:grid-cols-4 mt-4 justify-evenly'>
                <div className='space-y-8 flex flex-col'>
                    <h2 className='text-lg text-white font-bold'>About us</h2>
                    <p className='text-left line-clamp-4'>Music School is a premium institution dedicted to teaching music art and science of music. We nurture Student from ground level to a Sucessful carrer for betterment of the students.</p>
                </div>
                <div className='space-y-8 flex flex-col'>
                    <h2 className='text-lg text-white font-bold'>Quick Link</h2>
                    <ul className='flex flex-col space-y-1'>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'/'}>Home</Link></li>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'/'}>About</Link></li>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'/courses'}>Courses</Link></li>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className='space-y-8 flex flex-col'>
                    <h2 className='text-lg text-white font-bold'>Follow us</h2>
                    <ul className='flex flex-row space-x-3'>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'#'}>Facebook</Link></li>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'#'}>Twitter</Link></li>
                        <li className='hover:font-semibold hover:text-white w-fit'><Link href={'#'}>Instagram</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-lg text-white font-bold mb-8'>Contact Us</h2>
                    <p>New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8 font-semibold">© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}

export default Footer
