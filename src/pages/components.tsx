import React, { HTMLAttributes } from 'react'
import {
    H1,
    H2,
    H3,
    P,
    Blockquote,
    InlineCode,
    Lead,
    LargeText,
    SmallText,
    MutatedText,
    Ul,
    A,
} from '../components/ui/typography'
import { Button } from '../components/ui/button'
import { cn } from '~/lib/utils'
import { Checkbox, CheckboxWithText } from '../components/ui/checkbox'
import { Card, CardHeader } from '~/components/ui/card'
import { Table, TBody, TD, TH, THead, TR } from '~/components/ui/table'
import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from 'next-dark-mode'

const Components = () => {
    const { darkModeActive, switchToDarkMode, switchToLightMode } =
        useDarkMode()

    const toggleDarkMode = () => {
        darkModeActive ? switchToLightMode() : switchToDarkMode()
    }

    const ShowcaseCard: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
        children,
        label,
        className,
        ...props
    }) => {
        return (
            <div className='flex flex-grow flex-col items-start'>
                <MutatedText className='mb-1 ml-1'>{label}</MutatedText>
                <Card className={cn('flex flex-col', className)}>
                    {children}
                </Card>
            </div>
        )
    }

    const buttons = (
        <>
            <Button>Button</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='accent'>Accent</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='nav'>Nav</Button>
        </>
    )

    const typography = (
        <>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <InlineCode>Inline Code</InlineCode>
            <Lead>Lead</Lead>
            <A href='#'>Link</A>
            <LargeText>Large Text</LargeText>
            <P>Normal Text</P>
            <SmallText>Small Text</SmallText>
            <MutatedText>Mutated Text</MutatedText>
            <Ul>
                <li>Unordered List</li>
                <li>Unordered List</li>
            </Ul>
            <Blockquote>Blockquote</Blockquote>
        </>
    )

    const checkboxes = (
        <>
            <Checkbox id='terms-1'></Checkbox>
            <CheckboxWithText
                id='terms-2'
                text='Accept terms and conditions'
            ></CheckboxWithText>
            <CheckboxWithText
                id='terms-3'
                text='Accept terms and conditions'
                label='You agree to our Terms of Service and Privacy Policy.'
            ></CheckboxWithText>
        </>
    )

    return (
        <div className='flex min-h-screen w-full flex-col flex-wrap items-start justify-start gap-10 bg-background p-12 antialiased'>
            <div className='flex w-full items-center justify-between'>
                <H1>Components</H1>
                <Button
                    variant='ghost'
                    onClick={toggleDarkMode}
                    className='h-10 w-10 p-0'
                >
                    {darkModeActive ? <Moon></Moon> : <Sun></Sun>}
                </Button>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <ShowcaseCard label='Typography'>{typography}</ShowcaseCard>
                <ShowcaseCard label='Buttons' className='gap-2'>
                    {buttons}
                </ShowcaseCard>
            </div>
        </div>
    )
}

export default Components
