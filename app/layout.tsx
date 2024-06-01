import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import banner from 'public/banner.png'

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
        <div className="navbar bg-main lg:px-44 md:px-16 flex justify-between text-white hover:text-white">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-4 text-xl">
              <li className="hidden md:block"><Link href="/">Home</Link></li>

              <li>
                <div className="dropdown dropdown-start" id="parentDropdown">
                  <summary tabIndex={0} role="button">Services</summary>
                  <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-10 top-12 border-l-0">
                        <li><Link className="hover:text-white" href="/services/ProcessEquipmentManagement">Process Equipment Management</Link></li>
                        <li><Link className="hover:text-white" href="/services/PlatingSolutions">Plating Solutions</Link></li>
                        <li><Link className="hover:text-white" href="/services/InjectionMoldingSolutions">Injection Molding Solutions</Link></li>
                        <li><Link className="hover:text-white" href="/services/ProcessEquipmentSales">Process Equipment Sales</Link></li>
                        <li><Link className="hover:text-white" href="/services/AutomationAndControls">Automation and Controls</Link></li>
                  </ul>
                </div>
              </li>

              <li className="hidden xl:block"><Link href="/about">About</Link></li>
              <li className="hidden sm:block"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <Link href="/">
              {/* <p className="text-2xl font-bold">Fenix Engineering</p> */}
              <Image src={banner} alt="Fenix Engineering" className="" />
            </Link>
          </div>
        </div>
        {/* End-Navbar */}

        <div className="bg-gray-900">
          {children}
        </div>

        {/* Start-Footer */}
        <footer className="footer py-10 bg-neutral text-neutral-content lg:px-60 md:px-36 sm:px-20 px-10 md:flex-col lg:flex-row text-white">
          <div>
            <p className='lg:pr-32 md:pr-16 font-bold'>Fenix Engineering is here to help you get the best return out of your machines and keep your processes running smoothly. Contact us today to experience the uptmost peace of mind with your process.</p>
            <div className="flex flex-row"><p className="">Web Design & Maintenance by <a href="https://mastersautomation.tech/services/OfficeAndIndustry/WebDesign" className="text-main hover:text-[#f00]">Master&apos;s Automation</a></p><p></p></div>
          </div>
          <div>
            <div className="flex flex-col">
              <Link href="/contact" className="text-main underline">Contact us</Link>
              <p>Denver, CO</p>
              <p>info@fenixengineeringllc.com</p>
            </div>
          </div>
        </footer>
        {/* End-Footer */}

      </body>
    </html>
  )
}
