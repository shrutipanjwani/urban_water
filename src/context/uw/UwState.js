import React, { useReducer } from 'react'
import uwContext from './uwContext'
import uwReducer from './uwReducer'
import axios from 'axios'

const UwState = props => {
    const initialState = {
        placeName: '',
        searchValue: ''
    }

    const [state, dispatch] = useReducer(uwReducer, initialState)

    const setPlace = result => dispatch({type: 'set_place', payload: result})

    return <uwContext.Provider
        value={{
            placeName: state.placeName,
            searchValue: state.searchValue,
            setPlace
        }}
    >{ props.children }</uwContext.Provider>
}

export default UwState