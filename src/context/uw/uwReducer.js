export default (state, action) => {
    switch(action.type) {
        case 'set_place':
            return {
                ...state,
                placeName: action.payload.place,
                searchValue: action.payload.searchValue,
                selectedPlace: action.payload.selectedFeature[0]
            }
        case 'set_layerinfo':
            return {
                ...state,
                layerinfo: action.payload
            }
        case 'set_center':
            return {
                ...state,
                center: action.payload
            }
        case 'set_zoom':
            return {
                ...state,
                zoom: action.payload
            }
        default:
            return state
    }
}