import Spline from '@splinetool/react-spline'
import React, { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'

const Cube = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        // make sure you have a canvas in the body
        const canvas = canvasRef.current

        // start the application and load the scene
        //@ts-ignore
        const spline = new Application(canvas)
        spline.load('https://resend.com/static/cube.splinecode')

        return () => {
            spline.dispose()
        }
    }, [])

    //transform-gpu

    return (
        <div
            className="hidden h-[600px] w-1/2 transform-gpu rounded-full
        before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:rounded-full
        before:bg-gradient-to-br before:from-[#00fee00d] before:to-[#57330040] before:blur-[100px] before:content-[''] lg:block lg:animate-webgl-scale-in-fade"
        >
            <canvas
                id='canvas3d'
                ref={canvasRef}
                className='relative z-20 animate-webgl-scale-in-fade'
            ></canvas>
        </div>
    )
}

export default Cube

/*
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


*/
