import React, { HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'

const Text: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p
            className={cn('text-zinc-800 dark:text-zinc-200', className)}
            {...props}
        >
            {children}
        </p>
    )
}

export default Text
