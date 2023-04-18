import React from 'react'

const Key = ({ char }: { char: string }) => {
    return (
        <span
            className='inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded border bg-[#e2f0fd15] text-sm
                                    uppercase text-black transition duration-200 ease-in-out group-hover:bg-[#fdfeffec] group-focus:bg-[#fdfeffec]
                                    dark:border-[#e2f0fd15] dark:text-[#eff7ff9d]'
        >
            {char}
        </span>
    )
}

export default Key
