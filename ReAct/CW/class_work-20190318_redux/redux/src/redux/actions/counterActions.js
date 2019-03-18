export const plus = (number) =>  ({
    type: 'PLUS',
    data: number,
})

export const minus = (number) =>  ({
    type: 'MINUS',
    data: number,
})

export const reset = () =>  ({
    type: 'RESET',
})