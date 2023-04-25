import React from 'react'
import { cn } from '~/lib/utils'

export const H1 = ({ children, className }) => {
    return (
        <h1
            className={cn(
                'scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl',
                className
            )}
        >
            {children}
        </h1>
    )
}

export const H2 = ({ children, className }) => {
    return (
        <h2
            className={cn(
                'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-foreground transition-colors first:mt-0',
                className
            )}
        >
            {children}
        </h2>
    )
}

export const H3 = ({ children, className }) => {
    return (
        <h3
            className={cn(
                'scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
                className
            )}
        >
            {children}
        </h3>
    )
}

export const P = ({ children, className }) => {
    return (
        <p className={cn('leading-7 text-foreground', className)}>{children}</p>
    )
}

export const Blockquote = ({ children, className }) => {
    return (
        <blockquote
            className={cn(
                'my-2 border-l-2 pl-6 italic text-foreground',
                className
            )}
        >
            {children}
        </blockquote>
    )
}

export const InlineCode = ({ children, className }) => {
    return (
        <code
            className={cn(
                'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground',
                className
            )}
        >
            {children}
        </code>
    )
}

export const Lead = ({ children, className }) => {
    return (
        <p className={cn('text-xl text-muted-foreground', className)}>
            {children}
        </p>
    )
}

export const LargeText = ({ children, className }) => {
    return (
        <div className={cn('text-lg font-semibold text-foreground', className)}>
            {children}
        </div>
    )
}

export const SmallText = ({ children, className }) => {
    return (
        <div
            className={cn(
                'text-sm font-medium leading-none text-foreground',
                className
            )}
        >
            {children}
        </div>
    )
}

export const MutatedText = ({ children, className }) => {
    return (
        <div className={cn('text-sm text-muted-foreground', className)}>
            {children}
        </div>
    )
}

export const Ul = ({ children, className }) => {
    return (
        <ul
            className={cn(
                'ml-6 list-disc text-foreground [&>li]:mt-2',
                className
            )}
        >
            {children}
        </ul>
    )
}

export const A = ({ children, className, href }) => {
    return (
        <a
            href={href}
            className={cn(
                'font-medium text-foreground underline underline-offset-4',
                className
            )}
        >
            {children}
        </a>
    )
}
