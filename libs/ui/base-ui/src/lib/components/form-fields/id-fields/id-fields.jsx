import {FileField} from '@frnt/base'
import {Field, getIn, useFormikContext} from 'formik'
import React from 'react'
import {IDENTITY_DOCUMENT_TYPE_OPTIONS} from '@frnt/base'
import {SelectField} from '@frnt/base'
import {Typography} from '@frnt/base'
import {fileFieldPropTypes} from '@frnt/base/components/form-fields/file-field/file-field'
import PropTypes from 'prop-types'

// TODO Adnan: Write docs,tests and compose this component
const PASSPORT = 'passport'
export const IdFields = ({name, authToken, maxSize, maxFiles, uploadUri, disabled, handleBlur, ...otherProps}) => {
  const {values, setFieldValue} = useFormikContext()
  const isPassportField = getIn(values, `${name}.type`) === PASSPORT
  return (
    <>
      <Field
        handleChange={(val) => {
          // if passport is selected, remove back field
          if (val === PASSPORT) {
            setFieldValue(`${name}.back`, undefined)
          }
        }}
        component={SelectField}
        name={`${name}.type`}
        options={IDENTITY_DOCUMENT_TYPE_OPTIONS}
        theme={'neutral'}
        disabled={disabled}
        handleBlur={handleBlur}
        {...otherProps}
      />
      <Typography use="body-small-regular">FRONT</Typography>
      <Field
        name={`${name}.front`}
        component={FileField}
        maxFiles={maxFiles}
        maxSize={maxSize}
        accept="image/jpeg, image/png, application/pdf"
        uploadUri={uploadUri}
        authToken={authToken}
        disabled={disabled}
        handleBlur={handleBlur}
        {...otherProps}
      />
      {!isPassportField && (
        <>
          <Typography use="body-small-regular">BACK</Typography>
          <Field
            name={`${name}.back`}
            component={FileField}
            maxFiles={maxFiles}
            maxSize={maxSize}
            accept="image/jpeg, image/png, application/pdf"
            uploadUri={uploadUri}
            authToken={authToken}
            disabled={disabled}
            handleBlur={handleBlur}
            {...otherProps}
          />
        </>
      )}
    </>
  )
}

export const idFieldsPropTypes = {
  name: PropTypes.string.isRequired,
  authToken: PropTypes.string.isRequired,
  maxSize: PropTypes.number,
  maxFiles: PropTypes.number,
  uploadUri: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleBlur: PropTypes.func
}

IdFields.propTypes = idFieldsPropTypes
