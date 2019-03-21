export const saveContactCard = (obj) => ({
    type: `ADDNEWCARD`,
    newCard: {...obj, id: Date.now()},
})
export const closeModal = () => ({
    type: 'SHOW',
})