'use client' //Create a redirect to /products/keypad so that the old https://mastersautomation.tech/auto-pad link still works

import Image from 'next/image'

import autopad from '../../public/automation-keypad.jpg'

export default function Page() {
    return (
        <main className="w-full bg-gray-900 py-4" data-theme="dark">
            <h1 className="text-4xl font-bold text-center p-4 ">Automation Keypad</h1>
            <div className="flex flex-row p-4 gap-16 flex-wrap pt-0">
                <Image src={autopad} className="w-full max-w-screen-sm mx-auto rounded-xl" alt="Automation Keypad" />
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl py-4 font-bold">Automate the most boring work</h2>
                    <p>Use 36 of your own custom lists of actions to simulate keyboard and mouse input. Simulate anything from a single keystroke to a complex workflow with loops. With some creativity this device can easily be used like cheat codes for data entry jobs and to automate the most time consuming and robotic tasks on the computer.</p>
                    <br />
                    <h2 className="text-xl py-4 font-bold">No Programming Required</h2>
                    <p>Save our configuration page and take it with you everywhere to quickly generate keypad configurations for any use case. Access to the configuration page is free forever and as it improves, so does the functionality of the automation keypad. All you need to upload the configuration to the device is a computer with the <a href="https://www.arduino.cc/en/software" className="text-blue-400 underline">Arduino IDE</a>.</p>
                    <br />
                    <div className="flex flex-row justify-center space-x-4">
                        <a className="btn btn-outline text-red-500 hover:bg-red-500" href="http://keypad.mastersautomation.tech/">Configure</a>
                        <a className="btn btn-outline text-green-500 hover:bg-green-500" href="https://buy.stripe.com/aEU02T4hZ4Lo6nSeUU">Purchase</a>
                    </div>
                    <br />
                    <p>*  Prototype pictured, production model includes a kill switch to restrict input and a switch to a add a second configuration to each key (like a 2nd button on a calculator)</p>
                    <p>** No programming is required but the automation keypad is essentially an Arduino shield and can be programmed to exceed the functionality of the configuration page.</p>
                </div>
            </div>
        </main>
    )
}
