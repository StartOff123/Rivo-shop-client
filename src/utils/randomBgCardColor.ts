export const randomBgCardColor = (): string => {
    const colors: Array<string> = [
        '#EAEBF0',
        '#D9D9D9',
        '#C5F5D6',
        '#93B9A2',
        '#A3F3BE',
    ]

    console.log(colors[Number(Math.floor(Math.random() * 4))])

    return colors[Number(Math.floor(Math.random() * 4))]
}