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

const Header = () => {
    const signInButton = (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button variant='metal'>
                        Sign in<ArrowRightIcon color='#70757E'></ArrowRightIcon>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <Text>Go to login</Text>
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
                <Button variant='metal'>
                    Sign in
                    <ArrowRightIcon
                        color='#70757E'
                        height={20}
                        width={20}
                    ></ArrowRightIcon>
                </Button>

                <Button variant='glow'>Request access</Button>
            </div>
        </header>
    )
}

export default Header
