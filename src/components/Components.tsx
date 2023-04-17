import React, { HTMLAttributes } from 'react'
import Title from '~/components/ui/typography/Title'
import Emoji from '~/components/ui/typography/Emoji'
import Subtle from '~/components/ui/typography/Subtle'
import Subtlest from '~/components/ui/typography/Subtlest'
import Heading from '~/components/ui/typography/Heading'
import Text from '~/components/ui/typography/Text'
import Button from '~/components/ui/buttons/Button'
import { cn } from '~/lib/utils'
import { Checkbox, CheckboxWithText } from '~/components/ui/checkbox/Checkbox'

const Components = () => {
    const Element: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
        children,
        heading,
        className,
        ...props
    }) => {
        return (
            <div className={cn('flex flex-col items-start gap-2', className)}>
                <Heading className='mb-4'>{heading}</Heading>
                {children}
            </div>
        )
    }

    const typography = (
        <Element heading='Typography'>
            <Heading>Heading</Heading>
            <Title>Title</Title>
            <Text>Text</Text>
            <Emoji>👋</Emoji>
            <Subtle>Subtle</Subtle>
            <Subtlest>Subtlest</Subtlest>
        </Element>
    )

    const buttons = (
        <Element heading='Buttons' className='grid grid-cols-2 gap-3'>
            <div></div>
            <Button>Button</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='subtle'>Subtle</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='nav'>Nav</Button>
            <Button variant='metal'>Metal</Button>
            <Button variant='glow'>Glow</Button>
        </Element>
    )

    const checkboxes = (
        <Element heading='Checkboxes' className='items-start'>
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
        </Element>
    )

    const baseGridStyle =
        'grid min-h-screen w-1/2 grid-cols-3 gap-4 items-start justify-start p-8'

    return (
        <div className='flex min-h-screen w-full flex-row flex-wrap items-center justify-center antialiased'>
            <div className={cn('dark bg-root', baseGridStyle)}>
                {typography}
                {buttons}
                {checkboxes}
            </div>
            <div className={cn('bg-white', baseGridStyle)}>
                {typography}
                {buttons}
                {checkboxes}
            </div>
        </div>
    )
}

export default Components
