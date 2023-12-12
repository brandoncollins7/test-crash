import React, {useRef} from 'react'
import {TextField} from '@frnt/base'
import {Autocomplete} from '@react-google-maps/api'
import {useJsApiLoader} from '@react-google-maps/api'
import PropTypes from 'prop-types'
import {useFormikContext} from 'formik'

// TODO Adnan: Make this an env variable
const GOOGLE_MAPS_API_KEY = 'AIzaSyArPst-69YL96MHXkYwK5DvSpRCgBD6Hv0'
const GOOGLE_MAPS_LIBRARIES = ['places']

export const PlaceAutocompleteField = ({handleLoad, handlePlaceChanged, componentRestrictions, ...otherProps}) => {
  const autocompleteRef = useRef(null)
  const {setFieldValue} = useFormikContext()
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAPS_LIBRARIES
  })

  if (!isLoaded) {
    return <TextField {...otherProps} />
  }
  const handlePlaceChangedInternal = (d) => {
    if (handlePlaceChanged) {
      handlePlaceChanged()
    } else {
      // set field value with google autocomplete
      const place = autocompleteRef.current.getPlace()
      setFieldValue(otherProps.field.name, place.formatted_address)
    }
  }

  return (
    <Autocomplete
      ref={autocompleteRef}
      onLoad={(autocomplete) => {
        autocompleteRef.current = autocomplete
        if (handleLoad) {
          handleLoad(autocomplete)
        }
      }}
      onPlaceChanged={handlePlaceChangedInternal}
      componentRestrictions={componentRestrictions}
      fields={['formatted_address', 'address_components']}
      types={['address']}>
      <TextField {...otherProps} />
    </Autocomplete>
  )
}

PlaceAutocompleteField.propTypes = {
  handleLoad: PropTypes.func,
  handlePlaceChanged: PropTypes.func,
  componentRestrictions: PropTypes.object
  // TODO Adnan: understand why this is causing an issue
  // ...TextField.propTypes
}

PlaceAutocompleteField.defaultProps = {
  componentRestrictions: {}
}
