const modalControl = {
    add: false,
    del: false,
}
function showModal (state=modalControl, action) {
    switch (action.type) {
        case 'ADDMODAL':
            return {...state, add: !state.add};
        case 'DELMODAL':
            return !state.del;
        default:
            return state;
    }
}
export default showModal;