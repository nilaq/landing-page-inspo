'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ForwardRefRenderFunction } from 'react'
import { ButtonProps } from '~/components/ui/buttons/Button'

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-zinc-300 focus:outline-none focus:ring-1 ' +
                'focus:ring-zinc-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 ' +
                'dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900',
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center')}
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
