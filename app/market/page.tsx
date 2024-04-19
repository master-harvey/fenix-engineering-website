'use client'

import Image from 'next/image'

import grafana from '../../public/Grafana_logo.png'
import aws from '../../public/aws.png'

export default function Page() {
    return (
        <main className="">
            <div className="mx-auto bg-stock-tickers p-8">
                <div className="bg-gray-800 w-fit p-4 my-16 mx-auto max-w-lg lg:ml-[25%] md:ml-auto rounded-xl">
                    <h1 className="text-4xl font-bold text-center p-4 pb-0">Market Environment</h1>
                    <h2 className="text-2xl font-bold text-center p-4 pt-0">(Coming Soon)</h2>
                    <p>This software as a service turns your establishment into a stock market, and allows patrons to purchase your products like securities that are tradable and redeemable only at your location(s).</p>
                </div>
            </div>
            <div className="bg-gray-700">
                <div className="flex flex-row justify-center items-center p-8 flex-wrap gap-10">
                    <Image src={grafana} className='w-96 rounded-xl' alt="Grafana" />
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Grafana Metrics Display</p>
                        <p>Grafana is one of the most beautiful and customizable data monitoring platforms.</p>
                        <p>Easily ensure the theme of your market matches it&apos;s environment.</p>
                        <p>Visit our customization guide for a step by step tutorial.</p>
                        <a href="https://grafana.com" target="_blank" className="btn btn-outline hover:bg-yellow-500 text-black bg-orange-500 w-fit mx-auto px-10">Explore Grafana</a>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center p-8 flex-wrap-reverse gap-4">
                    <div className="flex flex-col space-y-2 bg-gray-500 p-4 m-8 h-fit rounded-xl w-96">
                        <p className="text-2xl font-bold">Runs in the Cloud</p>
                        <p>Our Market Environments will be powered by AWS. This means:</p>
                        <ul>
                            <li className="list-item">Complete setup in minutes</li>
                            <li className="list-item">No on site computers to manage</li>
                            <li className="list-item">Top of the line Speed, Reliability, and Security</li>
                        </ul>
                        <a href="https://aws.amazon.com" target="_blank" className="btn btn-outline hover:bg-yellow-500 text-black bg-orange-500 w-fit mx-auto px-10">Explore AWS</a>
                    </div>
                    <Image src={aws} className='w-96 rounded-xl' alt="AWS" />
                </div>
            </div>
        </main >
    )
}
