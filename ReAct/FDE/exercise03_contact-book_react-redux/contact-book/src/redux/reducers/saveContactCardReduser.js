function contactCardArray (state=[], action) {
    switch (action.type) {
        case "ADDNEWCARD":
            localStorage.setItem( "contactCards", JSON.stringify([...state, action.newCard]) )
            return [...state, action.newCard];
        case "ADDCARDSFROMLOCAL":
            return action.CardsArr;
        case "DELCC":
            const newState = state.filter(el => el.id !== Number(action.id));
            localStorage.setItem( "contactCards", JSON.stringify(newState) )
            return newState;
        default:
            return state;
    }
}
export default contactCardArray;