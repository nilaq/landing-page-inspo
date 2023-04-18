import React from 'react'
import Title from '~/components/ui/typography/Title'
import Text from '~/components/ui/typography/Text'
import Button from '~/components/ui/buttons/Button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip/Tooltip'
import RequestAccess from '~/components/RequestAccess'

const Header = () => {
    const key = char => {
        return (
            <span
                className='inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded border bg-[#e2f0fd15] text-sm
                                    uppercase text-black transition duration-200 ease-in-out group-hover:bg-[#fdfeffec] group-focus:bg-[#fdfeffec]
                                    dark:border-[#e2f0fd15] dark:text-[#eff7ff9d]'
            >
                {char}
            </span>
        )
    }

    const signInButton = (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant='metal'>
                        Sign in
                        <ArrowRightIcon
                            color='#70757E'
                            height={20}
                            width={20}
                        ></ArrowRightIcon>
                    </Button>
                </TooltipTrigger>
                <TooltipContent variant='metal'>
                    <Text>Go to login</Text>
                    {key('S')}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

    const requestAccessButton = (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant='glow' className='hidden sm:inline-flex'>
                        Request access
                    </Button>
                </TooltipTrigger>
                <TooltipContent variant='metal'>
                    <Text>Request Access</Text>
                    {key('A')}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

    return (
        <header className='flex h-24 animate-header-slide-down-fade flex-row items-center justify-between'>
            <Title className='text-xl font-bold tracking-tight dark:text-slate-100'>
                Resend
            </Title>
            <div className='flex flex-row items-center gap-4'>
                <Button variant='nav' size='none' className='text-[14px]'>
                    Blog
                </Button>
                {signInButton}
                <RequestAccess buttonClassName='hidden sm:inline-flex'></RequestAccess>
            </div>
        </header>
    )
}

export default Header
