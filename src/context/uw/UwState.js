import React, { useReducer } from 'react'
import uwContext from './uwContext'
import uwReducer from './uwReducer'
import axios from 'axios'

const UwState = props => {
    const initialState = {
        selectedPlace: {}
    }

    const [state, dispatch] = useReducer(uwReducer, initialState)

    const setPlace = result => dispatch({type: 'set_place', payload: result})

    return <uwContext.Provider
        value={{
            setPlace,
            selectedPlace: state.selectedPlace
        }}
    >{ props.children }</uwContext.Provider>
}

export default UwState