import { HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'

const Emoji: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1 className={cn('text-2xl', className)} {...props}>
            {children}
        </h1>
    )
}

export default Emoji
