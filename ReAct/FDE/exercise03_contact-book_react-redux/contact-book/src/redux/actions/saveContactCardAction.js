export const saveContactCard = (obj) => ({
    type: "ADDNEWCARD",
    newCard: {...obj, id: Date.now()},
})
export const closeModal = () => ({
    type: 'ADDMODAL',
})
export const addContactCardsFromLocal = (obj) => ({
    type: "ADDCARDSFROMLOCAL",
    CardsArr: obj,
})
export const deleteCC = (id) => ({
    type: "DELCC",
    id,
})

