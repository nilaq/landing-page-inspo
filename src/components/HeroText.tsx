import React from 'react'
import Text from '~/components/ui/typography/Text'
import Title from '~/components/ui/typography/Title'
import Button from '~/components/ui/buttons/Button'

const HeroText = () => {
    return (
        <div className='flex max-w-3xl flex-col items-start'>
            <div className='flex animate-hero-slide-up-fade'>
                <Text className='inline-flex h-6 select-none items-center rounded bg-[#fd54001e] px-2 text-xs font-semibold dark:text-[#ff8c3ffa]  '>
                    Currently in private beta
                </Text>
            </div>
            <Title
                className='mt-2 inline-block max-w-[525px] animate-hero-slide-up-fade bg-gradient-to-br from-white to-[#e7f3ff78]
                          bg-clip-text align-top text-[35px] font-bold leading-[42px] tracking-[19.36px] dark:text-transparent
                           sm:text-6xl sm:text-6xl sm:leading-[68px] sm:tracking-[-0.896px]'
            >
                The new email <br /> API for developers
            </Title>
            <Text className='mb-8 mt-4 inline-block max-w-[591px] animate-hero-slide-up-fade align-top text-base font-normal dark:text-[#eff7ff9d]'>
                Build, test, and send transactional emails at scale. Resend
                provides the best developer experience helping you reach users
                instead of spam folders.
            </Text>
            <div className='animate-hero-slide-up-fade'>
                <Button
                    variant='nav'
                    size='none'
                    className='group select-none p-0 text-sm font-semibold'
                >
                    Press
                    <span
                        className='inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded bg-[#eff7ff9d] text-sm uppercase
                text-black transition duration-200 ease-in-out group-hover:bg-[#fdfeffec] group-focus:bg-[#fdfeffec]'
                    >
                        A
                    </span>
                    to request access
                </Button>
            </div>
        </div>
    )
}

export default HeroText
