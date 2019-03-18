export  const change = (e) => ({
    type: 'TYPING',
    value: e.target.value,
})

export const clear = () => ({
    type: 'CLEAR',
})