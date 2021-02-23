import React, { useReducer } from 'react'
import uwContext from './uwContext'
import uwReducer from './uwReducer'
import axios from 'axios'

const UwState = props => {
    const initialState = {
        selectedPlace: {},
        layerinfo: [],
        center: [-2.36966957036279, 54.2379333607472],
        zoom: 12,
        frmPage: false,
    }

    const [state, dispatch] = useReducer(uwReducer, initialState)

    const setPlace = result => dispatch({type: 'set_place', payload: result})

    const getLayerInfo = () => {
        axios.get(`/layer.json`).then(res => dispatch({type: 'set_layerinfo', payload: res.data.layers}))
    }

    const setCenter = result => dispatch({type: 'set_center', payload: result})

    const setZoom = result => dispatch({type: 'set_zoom', payload: result})

    const setFrmPage = result => dispatch({type: 'set_frmPage', payload: result})

    return <uwContext.Provider
        value={{
            selectedPlace: state.selectedPlace,
            layerinfo: state.layerinfo,
            center: state.center,
            zoom: state.zoom,
            frmPage: state.frmPage,
            setPlace,
            getLayerInfo,
            setCenter,
            setZoom,
            setFrmPage
        }}
    >{ props.children }</uwContext.Provider>
}

export default UwState