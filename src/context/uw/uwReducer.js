export default (state, action) => {
    switch(action.type) {
        case 'set_place':
            return {
                ...state,
                placeName: action.payload.place,
                searchValue: action.payload.searchValue,
                selectedPlace: action.payload.selectedFeature[0]
            }
        default:
            return state
    }
}