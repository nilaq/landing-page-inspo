import React from 'react'

const Rectangles = ({ className }: { className: string }) => {
    const rectSize = 55
    const amountX = 20
    const amountY = 4
    const fill = [[5, 15], [4, 8, 13], [7, 10], []]
    const fillColor = '#2CFFD1'

    const generateRectPositions = (): {
        x: number
        y: number
        fill: string
    }[] => {
        const rectPositions = []

        let currentX = 56.5
        let currentY = 70.5

        for (let i = 0; i < amountY; i++) {
            for (let j = 0; j < amountX; j++) {
                rectPositions.push({
                    x: currentX,
                    y: currentY,
                    // @ts-ignore
                    fill: fill[i].includes(j) ? `${fillColor}` : 'none',
                })
                currentX += rectSize
            }
            currentX = 0
            currentY += rectSize
        }

        return rectPositions
    }

    const rectPositions = generateRectPositions()

    return (
        <div className={className}>
            <svg viewBox={`0 0 1228 357`} width={'1228'} height={'357'}>
                <mask
                    id='grid-top'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='1227'
                    height='357'
                    style={{ maskType: 'alpha' }}
                >
                    <rect
                        width='1227'
                        height='357'
                        fill='url(#grid-top-gradient)'
                    ></rect>
                </mask>
                <g mask='url(#grid-top)'>
                    {rectPositions.map((pos, index) => (
                        <rect
                            key={index}
                            x={pos.x}
                            y={pos.y}
                            width={rectSize}
                            height={rectSize}
                            fill={pos.fill}
                            fillOpacity={0.2}
                            stroke={'#00FEDC'}
                            strokeOpacity={0.192}
                        />
                    ))}
                </g>
                <defs>
                    <radialGradient
                        id='grid-top-gradient'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(614 139.5) rotate(90.1317) scale(217.501 747.544)'
                    >
                        <stop stopColor='#D7D7D7' stopOpacity='0.2'></stop>
                        <stop
                            offset='0.522644'
                            stopColor='#D9D9D9'
                            stopOpacity='0'
                        ></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Rectangles
