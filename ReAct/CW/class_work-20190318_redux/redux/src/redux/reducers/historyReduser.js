function history (state=[], action) {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.data]
        default:
            return state;
    }
}
export default history;