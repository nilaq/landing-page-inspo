import React from 'react'
import Text from '~/components/ui/typography/Text'
import Title from '~/components/ui/typography/Title'
import { Button } from '~/components/ui/button'
import RequestAccess from '~/components/RequestAccess'

const HeroText = () => {
    return (
        <div className='z-100 flex max-w-3xl flex-col items-start'>
            <div className='flex animate-hero-slide-up-fade'>
                <Text className='inline-flex h-6 select-none items-center rounded bg-[#fd54001e] px-2 text-xs font-semibold text-[#ff8c3ffa] text-[#ff8c3ffa]'>
                    Currently in private beta
                </Text>
            </div>
            <Title
                className='mt-2 inline-block max-w-[525px] animate-hero-slide-up-fade bg-gradient-to-br from-foreground to-[#e7f3ff78] bg-clip-text
                          align-top text-[35px] font-bold leading-[42px] tracking-[-0.64px] text-transparent dark:from-white sm:text-6xl sm:leading-[68px] sm:tracking-[-0.896px]'
            >
                The new email <br /> API for developers
            </Title>
            <Text className='mb-8 mt-4 inline-block max-w-[591px] animate-hero-slide-up-fade align-top text-base font-normal dark:text-[#eff7ff9d]'>
                Build, test, and send transactional emails at scale. Resend
                provides the best developer experience helping you reach users
                instead of spam folders.
            </Text>
            <div className='hidden animate-hero-slide-up-fade sm:inline-flex'>
                <Button
                    variant='nav'
                    size='none'
                    className='group select-none p-0 text-sm font-semibold'
                >
                    Press
                    <span
                        className='mx-1 inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded bg-[#eff7ff9d] text-sm uppercase
                text-black transition duration-200 ease-in-out group-hover:bg-[#fdfeffec] group-focus:bg-[#fdfeffec]'
                    >
                        A
                    </span>
                    to request access
                </Button>
            </div>
            <div className='inline-flex animate-hero-slide-up-fade sm:hidden'>
                <RequestAccess></RequestAccess>
            </div>
        </div>
    )
}

export default HeroText
