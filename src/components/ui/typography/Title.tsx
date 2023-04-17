import { HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'

const Title: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1
            className={cn(
                'text-lg font-semibold text-zinc-800 dark:text-zinc-200',
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export default Title
