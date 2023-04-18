import React from 'react'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroText from '~/components/HeroText'
import Cube from '~/components/Cube'
import Rectangles from '~/components/utils/Rectangles'

const LandingPage = () => {
    return (
        <div className='dark flex min-h-screen w-full flex-row justify-center bg-[#05050a] antialiased selection:bg-[#00fde01b] selection:text-[#2cffd1cb]'>
            <div className='relative z-10 flex h-screen w-full max-w-5xl flex-col justify-between px-4 sm:px-8 md:max-w-7xl'>
                <Header></Header>
                <div className='flex w-full flex-row items-center justify-between'>
                    <HeroText></HeroText>
                    <Cube></Cube>
                </div>
                <Footer></Footer>
            </div>
            <Rectangles className='absolute top-0 z-0'></Rectangles>
            <Rectangles className='absolute bottom-0 z-0'></Rectangles>
        </div>
    )
}

export default LandingPage
