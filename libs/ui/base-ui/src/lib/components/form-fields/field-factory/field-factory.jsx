import {Field} from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import {
  PlaceAutocompleteField,
  ExpiringIdFields,
  IdFields,
  FIELD_TYPES,
  FileField,
  CheckboxGroupField,
  PlaceAutocompleteFields,
  CountriesSelectField,
  SelectField,
  TextField,
  RadioGroupField,
  ExpiringFileField,
  SwitchField
} from '@frnt/base'
import {FieldInput} from '@frnt/base'
const MAX_FILE_SIZE = 20 * 1000000 // Bytes.

// TODO Adnan: Get rid of this component and update validation schema to use fields elements directly.
export const FieldFactory = ({name, label, type, options, isToggleable, disabled, readOnly, accessToken, isHidden, fileUploadUri, handleBlur = () => {}}) => {
  return (
    <>
      {type === FIELD_TYPES.TEXT_FIELD && (
        <Field label={label} component={TextField} name={name} theme={'neutral'} disabled={disabled} handleBlur={handleBlur} readOnly={readOnly} />
      )}
      {type === FIELD_TYPES.DATE_FIELD && (
        <Field label={label} component={TextField} type="date" name={name} max="2999-12-31" theme={'neutral'} disabled={disabled} handleBlur={handleBlur} />
      )}

      {type === FIELD_TYPES.PHONE_FIELD && <FieldInput name={name} componentType="phone-input" handleBlur={handleBlur} />}
      {type === FIELD_TYPES.TEXTAREA_FIELD && !isHidden && (
        <Field textarea label={label} component={TextField} name={name} theme={'neutral'} disabled={disabled} handleBlur={handleBlur} />
      )}
      {type === FIELD_TYPES.SELECT_FIELD && <Field component={SelectField} name={name} options={options} theme={'neutral'} disabled={disabled} handleBlur={handleBlur} />}
      {type === FIELD_TYPES.COUNTRIES_SELECT_FIELD && <Field id={name} component={CountriesSelectField} name={name} disabled={disabled} handleBlur={handleBlur} />}
      {type === FIELD_TYPES.ADDRESS_FIELD && <Field label={label} component={PlaceAutocompleteField} name={name} disabled={disabled} handleBlur={handleBlur} />}
      {type === FIELD_TYPES.ADDRESS_FIELDS && <PlaceAutocompleteFields name={name} disabled={disabled} handleBlur={handleBlur} />}
      {type === FIELD_TYPES.CHECKBOX_GROUP_FIELD && <Field component={CheckboxGroupField} name={name} options={options} disabled={disabled} handleBlur={handleBlur} />}

      {type === FIELD_TYPES.CHECKBOX_FIELD && <Field component={CheckboxGroupField} name={name} options={options} disabled={disabled} handleBlur={handleBlur} />}

      {type === FIELD_TYPES.SWITCH_FIELD && <Field component={SwitchField} name={name} options={options} disabled={disabled} handleBlur={handleBlur} />}

      {type === FIELD_TYPES.RADIO_GROUP_FIELD && (
        <Field component={RadioGroupField} name={name} options={options} normalize={(value) => value === 'true'} disabled={disabled} handleBlur={handleBlur} />
      )}
      {type === FIELD_TYPES.FILE_FIELD && !isHidden && (
        <Field
          name={name}
          component={FileField}
          maxFiles={1}
          maxSize={MAX_FILE_SIZE}
          // Accept shouldn't be hardcoded for file fields and id fields (expired or not)
          // TODO Adnan: Make this dynamic
          accept={['image/jpeg', 'image/png', 'application/pdf']}
          uploadUri={fileUploadUri}
          authToken={accessToken}
          disabled={disabled}
          handleBlur={handleBlur}
        />
      )}
      {type === FIELD_TYPES.EXPIRING_FILE_FIELD && !isHidden && (
        <ExpiringFileField
          name={name}
          maxFiles={1}
          maxSize={MAX_FILE_SIZE}
          accept={['image/jpeg', 'image/png', 'application/pdf']}
          uploadUri={fileUploadUri}
          disabled={disabled}
          handleBlur={handleBlur}
        />
      )}
      {type === FIELD_TYPES.ID_FIELDS && (
        <IdFields
          name={name}
          maxFiles={1}
          maxSize={MAX_FILE_SIZE}
          accept={['image/jpeg', 'image/png', 'application/pdf']}
          uploadUri={fileUploadUri}
          authToken={accessToken}
          disabled={disabled}
          handleBlur={handleBlur}
        />
      )}
      {type === FIELD_TYPES.EXPIRING_ID_FIELDS && (
        <ExpiringIdFields
          name={name}
          maxFiles={1}
          maxSize={MAX_FILE_SIZE}
          accept={['image/jpeg', 'image/png', 'application/pdf']}
          uploadUri={fileUploadUri}
          authToken={accessToken}
          disabled={disabled}
          handleBlur={handleBlur}
        />
      )}
    </>
  )
}

FieldFactory.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'address-fields',
    'address-field',
    'checkbox-group-field',
    'checkbox-field',
    'switch-field',
    'text-field',
    'file-field',
    'date-field',
    'id-fields',
    'radio-group-field',
    'select-field',
    'phone-field',
    'textarea-field',
    'countries-select-field',
    'expiring-file-field',
    'expiring-id-fields'
  ]).isRequired,
  accessToken: PropTypes.string,
  options: PropTypes.array,
  isToggleable: PropTypes.bool,
  isHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  fileUploadUri: PropTypes.string,
  handleBlur: PropTypes.func,
  readOnly: PropTypes.bool
}
