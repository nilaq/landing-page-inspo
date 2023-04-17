import React from 'react'
import Spline from '@splinetool/react-spline'

const Cube = () => {
    //<Spline scene='https://resend.com/static/cube.splinecode' />
    return (
        <div
            className="h-[600px] w-1/2 transform-gpu rounded-full
        before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:rounded-full
        before:bg-gradient-to-br before:from-[#00fee00d] before:to-[#57330040] before:blur-[100px] before:content-['']"
        >
            <Spline
                scene='https://resend.com/static/cube.splinecode'
                className='animate-webgl-scale-fade-in'
            />
        </div>
    )
}

export default Cube
