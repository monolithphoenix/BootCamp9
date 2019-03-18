export const addObj = (text) => ({
    type: 'CREATE',
    data: {
        id: Date.now(),
        content: text,
    }
})
