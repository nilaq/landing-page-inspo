'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '~/lib/utils'
import { ForwardRefRenderFunction } from 'react'

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background ' +
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
                'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary',
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-primary')}
        >
            <Check className='h-4 w-4' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxWithText: ForwardRefRenderFunction<HTMLElement> = (
    { text, label, id, classNameText, classNameLabel, ...props },
    ref
) => {
    return (
        <div
            className={`${label ? 'items-top' : 'items-center'} flex space-x-2`}
        >
            <Checkbox id={id} />
            <div className='grid gap-0.5 leading-none'>
                <label
                    htmlFor={id}
                    className={cn(
                        'text-sm font-medium leading-none text-zinc-800 peer-disabled:cursor-not-allowed ' +
                            'peer-disabled:opacity-70 dark:text-zinc-200',
                        classNameText
                    )}
                >
                    {text}
                </label>
                {label && (
                    <p
                        className={cn(
                            'text-xs text-zinc-500 dark:text-zinc-400',
                            classNameLabel
                        )}
                    >
                        {label}
                    </p>
                )}
            </div>
        </div>
    )
}

export { Checkbox, CheckboxWithText }
