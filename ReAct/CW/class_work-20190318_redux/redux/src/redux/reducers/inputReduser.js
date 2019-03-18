function input(state='', action) {
    switch (action.type) {
        case 'TYPING':
            return action.value;
        case 'CLEAR':
            return '';
        default:
            return state;
    }
}
export default input;