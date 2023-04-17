import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { cn } from '../../../lib/utils'

const buttonVariants = cva(
    'inline-flex gap-1 items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none select-none' +
        ' focus:ring-0 focus:ring-zinc-400 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none transition duration-200 ease-in-out',
    {
        variants: {
            variant: {
                default:
                    'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900',
                destructive:
                    'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline:
                    'bg-transparent border border-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:border-zinc-600 dark:text-zinc-100',
                subtle: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-100',
                ghost: 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent',
                nav: 'bg-transparent text-zinc-500 hover:text-zinc-950 dark:text-resend-gray dark:hover:text-resend-white',
                metal:
                    'bg-[#e2f0fd15] hover:bg-zinc-50 dark:hover:bg-[#dff3fd1c] border border-zinc-200 dark:border-[#dfeffe23] text-zinc-600 dark:text-resend-gray ' +
                    'focus:ring-[#e0f3ff2e] focus:bg-[#dfeffe23]',
                glow:
                    'px-4 bg-white text-black hover:bg-white/90 focus:ring-white/20 focus:bg-white/90 disabled:hover:bg-white ' +
                    'drop-shadow-glow',
            },
            size: {
                default: 'h-10 py-2 px-4',
                xs: 'h-8 px-2 text-sm',
                sm: 'h-9 px-2 rounded-md text-sm',
                lg: 'h-11 px-8 rounded-md',
                none: 'p-0',
            },
            fullWidth: {
                true: 'w-full',
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

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
    {
        children,
        isLoading = false,
        disabled = false,
        type = 'button',
        variant,
        size,
        fullWidth,
        className,
        ...props
    },
    ref
) => {
    return (
        <button
            ref={ref}
            className={cn(
                buttonVariants({ variant, size, fullWidth, className })
            )}
            disabled={disabled || isLoading}
            type={type}
            {...props}
        >
            {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
            {children}
        </button>
    )
}

export default forwardRef(Button)
