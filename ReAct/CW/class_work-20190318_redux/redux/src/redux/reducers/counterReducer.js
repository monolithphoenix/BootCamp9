function counter (state=0, action) {
    switch (action.type) {
        case 'PLUS':
            return state + action.data;
        case 'MINUS':
            return state - action.data;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}
export default counter;