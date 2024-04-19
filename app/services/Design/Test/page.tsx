'use client'

import Image from 'next/image'

import { FaAngleDoubleDown } from "react-icons/fa";

import presentation from '@/public/presentation.jpg'
import simulator from '@/public/simulator.jpg'
import endurance from '@/public/endurance_test.jpg'
import stress from '@/public/stress_test.jpg'
import deal from '@/public/deal.jpg'

export default function Page() {
    return (
        <main className="">
            <div className="mx-auto bg-testing bg-center bg-cover p-8">
                <div className="w-full p-4 my-16 mx-auto bg-gray-600 rounded-xl">
                    <h1 className="sm:text-6xl text-3xl font-bold text-center p-4 pb-0">Product Testing</h1>
                    <p className="font-bold text-center">We can ensure that your product exceeds customer and business requirements</p>
                </div>
            </div>
            <div className="bg-gray-700 pt-8">
                <div className="flex flex-row w-full justify-center items-center p-4 gap-4">
                    <FaAngleDoubleDown />
                    <p className="text-2xl font-bold text-gray-400">Pre-Construction Tests</p>
                    <FaAngleDoubleDown />
                </div>

                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-10">
                    <Image src={presentation} className='w-96 rounded-xl' alt="Grafana" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Validation Testing</p>
                        <p>Is this something your end users even want? Who exactly should you market this to? Do some demographics care more about some features than others? These are all questions Master&apos;s Automation can answer for you by performing product validation testing. By designing sociological experiments regarding your product and collecting this end user data we can calculate how your product can make the biggest splash during launch.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Simluated Testing</p>
                        <p>Once a 3d model of your product has been created many computerized tests can be performed before material is even bought. Aerodynamic, Thermodynamic, Failure Analysis and more can all be accurately estimated with only a well defined product model.</p>
                    </div>
                    <Image src={simulator} className='w-96 rounded-xl' alt="Simluated Tests" />
                </div>

                <div className="flex flex-row w-full justify-center items-center p-4 gap-4">
                    <FaAngleDoubleDown />
                    <p className="text-2xl font-bold text-gray-400">Post-Construction Tests</p>
                    <FaAngleDoubleDown />
                </div>

                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <Image src={stress} className='w-96 rounded-xl' alt="Stress Testing" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Stress Testing</p>
                        <p>Ensure that your product can hold up to everything you think end users will throw at it. Master&apos;s Automation will determine exactly when your product fails and we can recommend what changes can be made to increase a part&apos;s performance.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Endurance Testing</p>
                        <p>Master&apos;s Automation can determine how long your product will last in terms of <i>cycles</i>. A mechanism is crafted to simulate prescribed usage of your product but on a fairly constant basis. Your product is either run until failure or the degredation of wear parts is measured to estimate it&apos;s lifetime.</p>
                    </div>
                    <Image src={endurance} className='w-96 rounded-xl' alt="Endurance Testing" />
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <Image src={deal} className='w-96 rounded-xl' alt="Great Deal" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Validation Testing</p>
                        <p>Take it full circle with another validation testing phase. Master&apos;s Automation determines what your end users actually think of the product, what it&apos;s major shortcomings are to be improved on in the next iteration, and where your product dominates the market so that you don&apos;t lose touch with your core userbase.</p>
                    </div>
                </div>
            </div>
        </main >
    )
}
