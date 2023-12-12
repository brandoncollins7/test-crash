import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Field, useFormikContext} from 'formik'
import {PlaceAutocompleteField} from '@frnt/base'
import {TextField} from '@frnt/base'
// TODO Adnan: Write docs,tests and compose this component
export const PlaceAutocompleteFields = ({name, handleBlur, disabled}) => {
  const autocompleteRef = useRef(null)
  const {setFieldValue, setFieldTouched} = useFormikContext()

  const handleLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete
  }

  const handlePlaceChanged = async () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace()
      const addressComponents = place.address_components
      if (!addressComponents) return

      const streetNumber = addressComponents.find((component) => component.types.includes('street_number'))
      const route = addressComponents.find((component) => component.types.includes('route'))
      const locality = addressComponents.find((component) => component.types.includes('locality'))
      const country = addressComponents.find((component) => component.types.includes('country'))
      const postalCode = addressComponents.find((component) => component.types.includes('postal_code'))
      setFieldValue(`${name}.address`, `${streetNumber?.long_name || ''} ${route?.long_name || ''}`)
      setFieldValue(`${name}.city`, locality?.long_name || '')
      setFieldValue(`${name}.country`, country?.long_name || '')
      setFieldValue(`${name}.zip_or_postal`, postalCode?.long_name || '')

      setFieldTouched(`${name}.address`, true)
      setFieldTouched(`${name}.city`, true)
      setFieldTouched(`${name}.country`, true)
      setFieldTouched(`${name}.zip_or_postal`, true)

      // Hack to wait for new value to be applied
      // Pending https://github.com/jaredpalmer/formik/issues/529
      // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
      setTimeout(() => {
        handleBlur()
      }, 0)
    }
  }

  return (
    <div>
      <Field
        label="Street Address"
        component={PlaceAutocompleteField}
        handleLoad={handleLoad}
        handlePlaceChanged={handlePlaceChanged}
        name={`${name}.address`}
        theme={['neutral', 'neutral3']}
        disabled={disabled}
        handleBlur={() => {
          // do nothing
        }}
      />
      <Field label="Apt, suite, etc. (optional)" component={TextField} name={`${name}.address2`} theme={['neutral', 'neutral3']}
handleBlur={handleBlur} disabled={disabled} />
      <Field label="City" component={TextField} name={`${name}.city`} theme={['neutral', 'neutral3']}
handleBlur={handleBlur} disabled={disabled} />
      <Field label="Country" component={TextField} name={`${name}.country`} theme={['neutral', 'neutral3']}
handleBlur={handleBlur} disabled={disabled} />
      <Field label="Zip Code" component={TextField} name={`${name}.zip_or_postal`} theme={['neutral', 'neutral3']}
handleBlur={handleBlur} disabled={disabled} />
    </div>
  )
}

PlaceAutocompleteFields.propTypes = {
  name: PropTypes.string.isRequired,
  handleBlur: PropTypes.func,
  disabled: PropTypes.bool
}
