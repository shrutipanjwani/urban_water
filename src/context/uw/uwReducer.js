export default (state, action) => {
    switch(action.type) {
        case 'set_place':
            return {
                ...state,
                placeName: action.payload.place,
                searchValue: action.payload.searchValue
            }
        default:
            return state
    }
}