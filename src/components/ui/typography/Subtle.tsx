import React, { HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'

interface Props {
    isError?: boolean
}

const Subtle: React.FC<HTMLAttributes<HTMLParagraphElement> & Props> = ({
    children,
    isError = false,
    className,
    ...props
}) => {
    return (
        <p
            className={cn(
                'text-sm',
                isError && 'text-red-600',
                !isError && 'text-zinc-600 dark:text-zinc-300',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export default Subtle
