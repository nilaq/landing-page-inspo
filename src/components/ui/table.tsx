import React from 'react'
import { cn } from '~/lib/utils'

export const Table = ({ className, children }) => {
    return <table className={cn('w-full', className)}>{children}</table>
}

export const THead = ({ className, children }) => {
    return <thead className={cn('', className)}> {children}</thead>
}

export const TH = ({ className, children }) => {
    return (
        <th
            className={cn(
                'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
        >
            {' '}
            {children}
        </th>
    )
}

export const TBody = ({ className, children }) => {
    return <tbody className={cn('', className)}> {children}</tbody>
}

export const TR = ({ className, children }) => {
    return (
        <tr className={cn('m-0 border-t p-0 even:bg-muted', className)}>
            {' '}
            {children}
        </tr>
    )
}

export const TD = ({ className, children }) => {
    return (
        <td
            className={cn(
                'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
        >
            {' '}
            {children}
        </td>
    )
}
