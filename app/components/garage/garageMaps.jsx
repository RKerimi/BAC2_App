//Quelle:https://stackblitz.com/edit/react-zqry2u?file=index.js

import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapWithAMarker =
    compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `200px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )
    ((props) =>
    <GoogleMap
        defaultZoom={10}
        center={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}>
        {props.Marker && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)

export default MapWithAMarker