'use client'

import Image from 'next/image'
import Link from 'next/link'
import Carousel from "nuka-carousel"

import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import drafting1 from '@/public/drawing.jpg'
import gears from '@/public/gears.jpg'
import evaluate from '@/public/meeting.jpg'
import drafting2 from '@/public/drafting.jpg'

import robot from '@/public/robot.jpeg'
import soldering from '@/public/soldering.jpg'
import rpi from '@/public/rpi.jpg'

import cnc from '@/public/cnc.png'
import fdm from '@/public/fdm.png'
import laser from '@/public/laser.png'
import sla from '@/public/sla.png'
import { BsAirplane } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-gray-700">
      <div className="flex flex-col space-y-4 bg-gray-700 py-10">
        <p className="text-6xl font-bold text-center">Your Ideas, Brought to Life in 3D</p>
        <p className="text-lg font-bold mx-auto text-center max-w-4xl">In the 21st century, every mechanical design starts with a 3d model. Virtually envision, manipulate, and test your idea before even buying material</p>
      </div>

      <Carousel className="max-h-[85vh]" autoplay={true} speed={1000} autoplayInterval={9000} wrapAround={true}>
        <div className="relative">
          <Image src={drafting1} className="w-full h-fit max-h-screen object-cover" alt="image 1" />
          <div className="flex flex-col gap-4 absolute top-1/4 right-24 text-white items-end text-right">
            <p className="text-4xl font-bold">Draft the individual parts</p>
            <p className="text-xl font-bold max-w-2xl mt-4">We get the ideas out of your head and into a 3d model.</p>
          </div>
        </div>

        <div className="relative">
          <Image src={gears} className="w-full h-fit max-h-screen object-cover" alt="image 2" />
          <div className="absolute top-40 w-full text-center text-white">
            <p className="text-6xl font-bold">Constrain parts to create an assembly</p>
            <p className="text-2xl font-bold mt-4">Configure physical constraints and relationships to govern the motion for gear trains, fasteners, frame members, etc.</p>
          </div>
        </div>

        <div className="relative">
          <Image src={evaluate} className="w-full h-fit max-h-screen object-cover" alt="image 3" />
          <div className="absolute top-1/4 left-24 text-white">
            <p className="text-6xl font-bold">Evaluate your design</p>
            <p className="text-2xl font-bold max-w-2xl mt-4">Test and evaluate your model Fitment, Rigidity, Aerodynamics, Thermodynamics, Manufacturability, and more</p>
            <p className="text-xl font-bold max-w-2xl mt-4">Simulations are far less resource intensive than failure testing.</p>
          </div>
        </div>

        <div className="relative">
          <Image src={drafting2} className="w-full h-fit max-h-screen object-cover" alt="image 3" />
          <div className="flex flex-col gap-4 absolute top-1/4 right-24 text-white items-end text-right">
            <p className="text-6xl font-bold">Create a multiview plan set & rendering</p>
            <p className="text-2xl font-bold max-w-2xl mt-4">Produce blueprints that fabricators can work with, mockup photos of the final product before production begins, and part drawings for documentation.</p>
            <p className="text-xl font-bold max-w-2xl mt-4">One hour spent designing is two saved during construction.</p>
          </div>
        </div>
      </Carousel>

      <div className="max-w-6xl mx-auto p-8">

        <div className="flex flex-col">
          <p className="text-4xl font-bold">Assembly CAD</p>
          <p className="max-w-6xl py-10 text-xl">Creating a 3d model is really the first step to creating any physical product. The model of your product will evolve with feedback from vendors, users, manufacturers, it may be 3d printed to ensure fitment, and can be used to create rendered photos ahead of manufacture. Master&apos;s Automation has the expertise to create a CAD model of anything, and we&apos;re prepared to produce photo-quality renders for your marketing team.</p>
        </div>

        <div className="flex flex-row items-center w-fit mx-auto">
          <FaAngleDoubleDown className="mx-auto" size={60} />
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black">Tell us about your project</Link>
          <FaAngleDoubleUp className="mx-auto" size={60} />
        </div>

        <div className="bg-gears mt-8">
          <p className="text-4xl font-bold">Printed Circuit Board Design</p>
          <p className="">We all know the type, a (typically green) fiberglass sheet with copper traces to route low voltage logic</p>
        </div>

        <div className="flex flex-row flex-wrap items-top justify-center gap-8 p-8">
          <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
            <Image src={rpi} alt={"Raspberry Pi"} className="w-50" />
            <p>Sense the Environment</p>
            <p>Printed Circuit Boards can help transmit readings from the environment into your digital workflow. Allow your machines to automatically answer questions like; How much is left? Who&apos;s been in here and when? Why did this occur?</p>
          </div>
          <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
            <Image src={soldering} alt={"Soldering"} className="w-50" />
            <p>Make Semi-Complex Decisions Instantly</p>
            <p>We rely on electrical logic making complex decisions every day to; keep us aware of fires in the home, keep machinery from causing injuries, sense and route traffic, and more. This reliability and speed could help your people focus more on executing and less on maintaining processes.</p>
          </div>
          <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
            <Image src={robot} alt={""} className="w-50" />
            <p>Produce an Output</p>
            <p>Produce a physical output based on your input data and digital instructions. Drive a motor, perform a keystroke, a mouse movement, sound a buzzer, switch an LED or Relay, to get what you need done.</p>
          </div>
        </div>

        <div className="flex flex-row items-center w-fit mx-auto">
          <FaAngleDoubleDown className="mx-auto" size={60} />
          <FaAngleDoubleUp className="mx-auto" size={60} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold">Rendering</p>
          <p className="max-w-6xl text-xl">Need to show your idea to investors or generate some presales? You may need a photo-realistic rendering of your product. Master&apos;s Automation can use the 3d models of your product to generate stunning images of your product as envisioned.</p>
          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black my-8">What do you need rendered?</Link>
        </div>

        <div className="flex flex-row items-center w-fit mx-auto">
          <FaAngleDoubleDown className="mx-auto" size={60} />
        </div>

        <div className="w-fit mt-8">
          <p className="text-4xl font-bold">CAM & CNC</p>
          <p className="">Allow machines to shape your material directly, taking input straight from the 3d model.</p>
        </div>

        <p>CAM, or, Computer Aided Machinery, is one of the keys to mass production. It allows Computer Numerical Control machines (CNC machines) to carve material into shape without human interaction and is integral to producing almost any real volume of product in the current age.</p>

        <div className="flex flex-col justify-center items-center p-8 gap-4">
          <p className="text-3xl font-bold">Our Machining Capabilites</p>
          <div className="flex flex-row flex-wrap items-top justify-center gap-8">
            <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
              <p>SLA 3D Printing</p>
              <Image src={sla} alt={"sla"} className="w-16 mx-auto" />
              <p className="text-left">Summon any shape from a pool of photo-sensitive resin. This form of 3d printing offers the highest resolution and strongest parts. SLA parts are <i>almost</i> equally strong in all directions and can also be printed from extremely strong resins that greatly out perform FDM capable plastics in almost every way.</p>
            </div>
            <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
              <p>Non-Ferrous CNC Machining</p>
              <Image src={cnc} alt={"cnc"} className="w-16 mx-auto" />
              <p className="text-left">Our CNC machine which has a hot swappable toolhead is capable of machining non-ferrous materials and is an essential part of our prototyping workflow. While 3d printing may take hours or days on &apos;small&apos; parts, CNC machines can produce large parts in just minutes from stock material.</p>
            </div>
            <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
              <p>Laser Engraving</p>
              <Image src={laser} alt={"laser"} className="w-24 mx-auto" />
              <p className="text-left">Our laser engraver is a great way to mark and etch everything we put in our CNC machine. Perfect for adding adding logos, designs, or assembly registration, our laser offers a cost-effective and versatile solution for small batch production and personalized items.</p>
            </div>
            <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
              <p>FDM 3D Printing</p>
              <Image src={fdm} alt={"fdm"} className="w-16 mx-auto" />
              <p className="text-left">The most cost effective way to 3d print. FDM printers have become popular in the last few decades as a way that everyone could rapidly prototype at home. Combined with other techniques and materials it&apos;s easy to produce finish quality parts with these machines.</p>
            </div>
            <div className="flex flex-col bg-gray-500 w-80 text-center p-4 gap-4">
              <p className="text-2xl font-bold">Foamboard Stenciling</p>
              <BsAirplane className="mx-auto text-black" size={60} />
              <p className="text-left">Lasers generally aren&apos;t used on styrofoam because of the toxic fumes released. Master&apos;s Automation uses a foam needle attached to our CNC machine to cut 2d shapes from foam board. Extremely popular with RC hobbyists.</p>
            </div>
          </div>

          <Link href="/contact" className="btn btn-outline bg-red-500 text-black w-fit mx-auto hover:text-white hover:bg-black mt-8">Contact us about your CNC project</Link>
        </div>

      </div>
    </main>
  )
}