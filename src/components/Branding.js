import Image from 'next/image'
import React from 'react'
import logo from "../../public/INPUMA Logo PNG.png"
import tagline from "../../public/taglinecco2024c.png"

export default function Branding() {
    return (
        <div className='flex justify-between p-2'>
            <div className='min:h-full flex place-items-center align-middle'>
                <Image src={logo} alt="INPUMA Logo" width={logo.width} height={logo.height} className='lg:w-auto lg:h-[80px]' />
            </div>
            <div className=' min:h-full flex place-items-center align-middle'>
                <Image src={tagline} alt="UM Tagline" width={tagline.width} height={tagline.height} className='lg:w-auto lg:h-[60px]' />
            </div>
        </div>
    )
}
