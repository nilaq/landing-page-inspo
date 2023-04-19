import React from 'react'
import Text from '~/components/ui/typography/Text'
import { Button } from '~/components/ui/button'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    //@ts-ignore
    const IconLink = ({ href, children }) => {
        return (
            <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block rounded-full text-[#eff7ff9d]
         transition transition-colors duration-200 ease-in-out hover:text-[#fdfeffec]'
            >
                {children}
            </a>
        )
    }

    const GithubIcon = () => {
        return (
            <IconLink href='https://github.com'>
                <FaGithub size={21} className='icon' />
            </IconLink>
        )
    }

    const TwitterIcon = () => {
        return (
            <IconLink href='https://twitter.com'>
                <FaTwitter size={21} className='icon'></FaTwitter>
            </IconLink>
        )
    }

    const LinkedinIcon = () => {
        return (
            <IconLink href='https://linkedin.com'>
                <FaLinkedinIn size={21} className='icon'></FaLinkedinIn>
            </IconLink>
        )
    }

    const YCombinatorIcon = (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_24_57)'>
                <rect width='24' height='24' rx='5.4' fill='#FF5100'></rect>
                <rect
                    x='0.5'
                    y='0.5'
                    width='23'
                    height='23'
                    rx='4.9'
                    stroke='#FF844B'
                ></rect>
                <path
                    d='M7.54102 7.31818H9.28604L11.9458 11.9467H12.0552L14.715 7.31818H16.46L12.7662 13.5028V17.5H11.2349V13.5028L7.54102 7.31818Z'
                    fill='white'
                ></path>
            </g>
            <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='4.9'
                stroke='#FF5100'
                strokeOpacity='0.1'
            ></rect>
            <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='4.9'
                stroke='url(#paint0_radial_24_57)'
            ></rect>
            <defs>
                <radialGradient
                    id='paint0_radial_24_57'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(7.35) rotate(58.475) scale(34.1384)'
                >
                    <stop stopColor='white' stopOpacity='0.56'></stop>
                    <stop
                        offset='0.28125'
                        stopColor='white'
                        stopOpacity='0'
                    ></stop>
                </radialGradient>
                <clipPath id='clip0_24_57'>
                    <rect width='24' height='24' rx='5.4' fill='white'></rect>
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <div className='mb-6 mt-[27px] flex w-full animate-footer-slide-up-fade flex-row items-end justify-between'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row items-center justify-start gap-4'>
                    <GithubIcon />
                    <TwitterIcon />
                    <LinkedinIcon />
                </div>
                <Text className='text-xs font-normal dark:text-[#eff7ff9d]'>
                    2261 Market Street #5039 <br />
                    San Francisco, CA 94114
                </Text>
            </div>
            <div className='flex items-center gap-2.5'>
                <Text className='text-sm font-normal dark:text-[#eff7ff9d]'>
                    Backed by
                </Text>
                {YCombinatorIcon}
                <Text className='hidden bg-gradient-to-br from-white to-[#e7f3ff78] bg-clip-text text-sm font-bold dark:text-transparent sm:inline-flex'>
                    Combinator
                </Text>
            </div>
            <div className='hidden flex-row items-center justify-end gap-5 sm:flex'>
                <Button
                    variant='nav'
                    className='m-0 items-end p-0 text-[14px] font-normal'
                >
                    Privacy Policy
                </Button>
                <Button
                    variant='nav'
                    className='m-0 items-end p-0 text-[14px] font-normal'
                >
                    Terms of Use
                </Button>
            </div>
        </div>
    )
}

export default Footer
