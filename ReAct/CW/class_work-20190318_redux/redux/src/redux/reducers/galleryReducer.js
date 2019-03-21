function gallery (state=[], action) {
    switch (action.type) {
        case 'DOWNLOADED':
            return [...action.data]
        default:
            return state;
    }
}

export default gallery;