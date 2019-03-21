export const setInputValue = e => ({
    type: `${e.target.name}`,
    [e.target.name]: e.target.value,
})