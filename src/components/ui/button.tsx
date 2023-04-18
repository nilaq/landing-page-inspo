import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '~/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none select-none' +
        'focus:ring-0 focus:ring-zinc-400 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none transition duration-200 ease-in-out',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'underline-offset-4 hover:underline text-primary',
                metal:
                    'bg-[#e2f0fd15] hover:bg-zinc-50 dark:hover:bg-[#dff3fd1c] border border-zinc-200 dark:border-[#dfeffe23] text-zinc-600 dark:text-resend-gray ' +
                    'focus:ring-[#e0f3ff2e] focus:bg-[#dfeffe23]',
                glow:
                    'px-4 bg-white text-black hover:bg-white/90 focus:ring-white/20 focus:bg-white/90 disabled:hover:bg-white ' +
                    'drop-shadow-glow',
                nav: 'bg-transparent text-foreground hover:text-foreground/70 dark:text-resend-gray dark:hover:text-resend-white',
            },
            size: {
                default: 'h-10 py-2 px-4',
                xs: 'h-8 px-2 text-sm',
                sm: 'h-9 px-3 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                none: 'p-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            isLoading = false,
            disabled = false,
            type = 'button',
            variant,
            size,
            ...props
        },
        ref
    ) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || isLoading}
                type={type}
                {...props}
            >
                {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
