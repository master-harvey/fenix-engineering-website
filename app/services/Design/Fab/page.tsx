'use client'

import Image from 'next/image'
import Link from 'next/link'

import planset from '@/public/drafting.jpg'
import assembly from '@/public/assembly_lasers.jpg'
import cnc from '@/public/cnc_endmill.jpg'

import manufacture from '@/public/manufacturing_line.jpg'
import mechanic from '@/public/mechanic_shop.jpg'

import { FaAngleDoubleDown } from "react-icons/fa";

export default function Page() {
    return (
        <main className="">
            <div className="mx-auto bg-motorcycle bg-center p-8 bg-cover">
                <div className="w-full p-8 my-16 mx-auto bg-gray-600 rounded-xl">
                    <h2 className="sm:text-5xl text-3xl font-bold text-center">Fabrication</h2>
                    <br />
                    <p className="font-bold mx-auto text-center">Let us help you make something totally unique</p>
                </div>
            </div>
            <div className="bg-gray-700 flex flex-col justify-center">
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
                    <Image src={planset} className='w-96 rounded-xl' alt="Grafana" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Create a Plan Set</p>
                        <p>Normally done after making a 3D model of your project, we can develop a 2D plan set for fabricators along with assembly animations and documentation.</p>
                    </div>
                </div>
                <div className="flex flex-row w-fit justify-center mx-auto sm:gap-72 gap-20 items-center">
                    <FaAngleDoubleDown className="mx-auto" />
                    <FaAngleDoubleDown className="mx-auto" />
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Machine the Parts</p>
                        <p>Normally done after making a 3D model of your project, we can develop a 2D plan set for fabricators along with assembly animations and documentation.</p>
                    </div>
                    <Image src={cnc} className='w-96 rounded-xl' alt="Grafana" />
                </div>
                <div className="flex flex-row w-fit justify-center mx-auto sm:gap-72 gap-20 items-center">
                    <FaAngleDoubleDown className="mx-auto" />
                    <FaAngleDoubleDown className="mx-auto" />
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
                    {/* <Image src={planset} className='w-96 rounded-xl' alt="Grafana" /> */}
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Tolerance Check</p>
                        <p>Normally done after making a 3D model of your project, we can develop a 2D plan set for fabricators along with assembly animations and documentation.</p>
                    </div>
                </div>
                <div className="flex flex-row w-fit justify-center mx-auto sm:gap-72 gap-20 items-center">
                    <FaAngleDoubleDown className="mx-auto" />
                    <FaAngleDoubleDown className="mx-auto" />
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
                    <Image src={assembly} className='w-96 rounded-xl' alt="Grafana" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Assembly</p>
                        <p>Torque it, Torch it, Bop it, Weld it... Whatever your project may require, we have the know how and the people to get it done.</p>
                    </div>
                </div>
                <div className="flex flex-row w-fit justify-center mx-auto gap-8 items-center">
                    <FaAngleDoubleDown className="mx-auto sm:visible invisible" />
                    <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black">What do you need made?</Link>
                    <FaAngleDoubleDown className="mx-auto sm:visible invisible" />
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-4">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96 border-4 border-red-600 border-dashed">
                        <p className="text-2xl font-bold">Testing</p>
                        <p>We can ensure that your design meets customer and business requirements</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto bg-welder bg-center bg-cover p-8">
                <div className="w-full p-4 my-16 mx-auto bg-gray-600 rounded-xl">
                    <h2 className="sm:text-5xl text-3xl font-bold text-center p-4 pb-0">Short Run Manufacturing</h2>
                    <br />
                    <p className="font-bold text-center">Need a few prototypes for investors or early adopters?</p>
                    <p className="text-center">Master&apos;s Automation is here to help while you&apos;re searching for a production space.</p>
                </div>
            </div>
            <div className="bg-gray-700">
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
                    <Image src={manufacture} className='w-96 rounded-xl' alt="Grafana" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Outsource your manufacturing</p>
                        <p>If we helped you protype your product, then we&apos;re more than happy to handle the headache of manufacturing low or made to order quantities for you so that you can focus on sales.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Already have a production space?</p>
                        <p>Between custom motion systems and Six-Sigma process analysis, we can help you get the most out of what you have.</p>
                    </div>
                    <Image src={mechanic} className='w-96 rounded-xl' alt="Grafana" />
                </div>
            </div>
        </main >
    )
}
