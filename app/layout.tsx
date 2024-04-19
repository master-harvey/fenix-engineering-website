import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import banner from 'public/MA-banner.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fenix Engineering',
  description: 'Industrial Automation Professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} data-theme="dark">

        {/* Navbar */}
        <div className="navbar bg-base-100 lg:px-44 md:px-16 flex justify-between">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <li className="hidden md:block"><Link href="/">Home</Link></li>

              {/* <li>
                <div className="dropdown dropdown">
                  <summary tabIndex={0} role="button">Products</summary>
                  <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 top-12">
                    <li><Link href="/auto-pad">Keypad</Link></li>
                    <li><Link href="/market">Market Environment</Link></li>
                  </ul>
                </div>
              </li> */}

              <li>
                <div className="dropdown dropdown-start" id="parentDropdown">
                  <summary tabIndex={0} role="button">Services</summary>
                  <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 top-12">
                    <li>
                      <ul className="p-2 bg-base-100">
                        <summary className="text-gray-500 hover:cursor-default">
                          Industrial Robotics
                        </summary>
                        <li><Link href="/services/OfficeAndIndustry/ProcessAnalysis">Process Analysis</Link></li>
                        <li><Link href="/services/OfficeAndIndustry/ServerAdmin">PLC Automation</Link></li>
                        <li><Link href="/services/OfficeAndIndustry/WebDesign">Servo Arm Integration</Link></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="p-2 bg-base-100">
                        <summary className="text-gray-500 hover:cursor-default">
                          Software Development
                        </summary>
                        <li><Link href="/services/Software/RPA">Robotic Process Automation</Link></li>
                        <li><Link href="/services/Software/Programming">Programming</Link></li>
                        <li><Link href="/services/Software/AI">Artificial Intelligence</Link></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="p-2 bg-base-100">
                        <summary className="text-gray-500 hover:cursor-default">
                          Product Design
                        </summary>
                        <li><Link href="/services/Design/CAD">3d Services & Model Design</Link></li>
                        <li><Link href="/services/Design/Fab">Fabrication</Link></li>
                        <li><Link href="/services/Design/Test">Testing</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="hidden xl:block"><Link href="/about">About</Link></li>
              <li className="hidden sm:block"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <Link href="/"><p className="text-2xl font-bold">Fenix Engineering</p></Link>
          </div>
        </div>
        {/* End-Navbar */}

        <div className="bg-gray-900">
          {children}
        </div>

        {/* Start-Footer */}
        <footer className="footer py-10 bg-neutral text-neutral-content lg:px-60 md:px-36 sm:px-20 px-10 md:flex-col lg:flex-row">
          <div>
            <p className='lg:pr-32 md:pr-16'>Fenix Engineering can help apply a lean-six sigma mindset to your business processes, and introduce automation to any physical or virtual process your business has. We specialize in making the machines in your business work as hard as they can for you.</p>
            <p className="font-bold">We do work</p>
          </div>
          <div>
            <div className="flex flex-col">
              <Link href="/contact" className="text-blue-400 underline">Contact us</Link>
              <p>Denver, CO</p>
              <p>info@fenix-engineering.com</p>
            </div>
          </div>
        </footer>
        {/* End-Footer */}

      </body>
    </html>
  )
}
