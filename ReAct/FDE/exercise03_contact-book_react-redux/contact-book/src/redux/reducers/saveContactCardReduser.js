function contactCardArray (state=[], action) {
    switch (action.type) {
        case "ADDNEWCARD":
            return [...state, action.newCard];
        default:
            return state;
    }
}
export default contactCardArray;