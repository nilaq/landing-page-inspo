import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'
import { Button } from '~/components/ui/button'
import Text from '~/components/ui/typography/Text'
import Key from '~/components/utils/Key'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import Title from '~/components/ui/typography/Title'
import Heading from '~/components/ui/typography/Heading'

const RequestAccessDialog = ({ children }) => {
    const requestAccessButton = (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>{children}</TooltipTrigger>
                    <TooltipContent variant='metal'>
                        <Text>Request Access</Text>
                        <Key char={'A'} />
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )

    const dialogContent = (
        <DialogContent className='dark p-10 text-center sm:max-w-[425px]'>
            <Heading className='mb-2'>Request access</Heading>
            <Text className='mb-8 text-sm font-normal dark:text-resend-gray'>
                Join our growing waitlist of 9,236 people and our team will
                reach out to you as soon as possible.
            </Text>
            <div className='mb-6 flex flex-col gap-2'>
                <div className='mb-2 flex flex-col items-start gap-1'>
                    <Label
                        htmlFor='name'
                        className='text-left text-sm font-normal dark:text-resend-gray'
                    >
                        Name
                    </Label>
                    <Input
                        id='name'
                        placeholder='Enter your name'
                        className='col-span-3 border-[#dfeffe23] bg-[#e2f0fd15] text-resend-white ring-offset-zinc-700'
                    />
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <Label
                        htmlFor='email'
                        className='text-left text-sm font-normal dark:text-resend-gray'
                    >
                        Email
                    </Label>
                    <Input
                        id='email'
                        placeholder='Enter your email'
                        className='col-span-3 border-[#dfeffe23] bg-[#e2f0fd15] text-resend-white ring-offset-zinc-700'
                    />
                </div>
            </div>
            <Button type='submit'>Request access</Button>
        </DialogContent>
    )

    return (
        <Dialog>
            <DialogTrigger asChild>{requestAccessButton}</DialogTrigger>
            {dialogContent}
        </Dialog>
    )
}

export default RequestAccessDialog
