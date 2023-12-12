import React from 'react'
import {Field, useFormikContext, getIn} from 'formik'
import {FormControl, Switch, FormErrorMessage, FormLabel, Input, InputRightElement, InputGroup, Select, Box, FormHelperText, RadioGroup, Stack, Radio, Text} from '@chakra-ui/react'
import {NumericFormat} from 'react-number-format'
import {CountrySelector, usePhoneInput} from 'react-international-phone'
import 'react-international-phone/style.css'
import moment from 'moment'
import {Button} from '@chakra-ui/react'
import {FileInputField} from './file-input-field'

interface FieldInputProps {
  name: string
  label?: string
  description?: string
  placeholder?: string
  componentType: 'input' | 'select' | 'number-input' | 'phone-input' | 'switch' | 'date-input' | 'radio-group' | 'file-input'
  options?: {value: string; label: string; readonly?: boolean}[]
  disabled?: boolean
  handleBlur?: (e: any) => void
  handleChange?: (e: any) => void
  type?: string
  readOnly?: boolean
  inputRightElement?: React.ReactNode
  // numberFormat is an object with the following properties: max,min
  numberFormat?: {
    max?: number
    min?: number
  }
  size?: 'sm' | 'md' | 'lg'
  decimalScale?: number
}

export const FieldInput: React.FC<FieldInputProps> = ({
  name,
  label,
  description,
  componentType,
  options,
  type,
  inputRightElement,
  numberFormat,
  handleBlur,
  handleChange = () => {
    // do something
  },
  placeholder,
  disabled,
  size = 'md',
  decimalScale = 2,
  ...props
}) => {
  const {errors, touched} = useFormikContext<any>() || {errors: {}, touched: {}}

  return (
    <FormControl isInvalid={!!(errors[name] && touched[name])} display="block" alignItems="center" gap={4}>
      <FormLabel my={2} htmlFor={name} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {label}
      </FormLabel>
      {description && (
        <FormHelperText color="neutral4" mt={-2} mb={2}>
          {description}
        </FormHelperText>
      )}
      <Field name={name}>
        {({field, form}: any) => {
          return (
            <>
              {componentType === 'input' && (
                <InputGroup>
                  <Input
                    type={type}
                    {...field}
                    onChange={(e) => {
                      handleChange(e)
                      field?.onChange(e)
                    }}
                    isDisabled={disabled}
                    size={size}
                  />
                </InputGroup>
              )}

              {componentType === 'switch' && (
                <Switch
                  id={name}
                  isChecked={field.value}
                  {...field}
                  {...props}
                  onChange={(e) => {
                    handleChange(e)
                    field?.onChange(e)
                  }}
                  isDisabled={disabled}
                  size={size || 'lg'}
                />
              )}
              {componentType === 'phone-input' && (
                <PhoneInput
                  field={field}
                  handleBlur={handleBlur}
                  handleChange={(e) => {
                    handleChange(e)
                    field.onChange(e)
                  }}
                  isDisabled={disabled}
                />
              )}
              {componentType === 'date-input' && (
                <InputGroup>
                  <Input
                    {...field}
                    value={field.value ? moment(field.value).format('YYYY-MM-DD') : ''}
                    type="date"
                    onChange={(e) => {
                      handleChange(e)
                      field.onChange(e)
                    }}
                    isDisabled={disabled}
                    size={size}
                  />
                </InputGroup>
              )}

              {componentType === 'number-input' && (
                <InputGroup>
                  <Input
                    as={NumericFormat}
                    thousandSeparator=","
                    decimalSeparator="."
                    decimalScale={decimalScale}
                    isAllowed={(values: any) => {
                      let isValid = true
                      if ((numberFormat?.max && values.floatValue > numberFormat.max) || (numberFormat?.min && values.floatValue < numberFormat?.min)) {
                        isValid = false
                      }

                      return isValid
                    }}
                    {...field}
                    onChange={(e) => {
                      handleChange(e)
                      field?.onChange(e)
                    }}
                    isDisabled={disabled}
                  />
                  {inputRightElement && <InputRightElement width="4.5rem">{inputRightElement}</InputRightElement>}
                </InputGroup>
              )}

              {componentType === 'radio-group' && (
                <RadioGroup
                  {...field}
                  isDisabled={disabled}
                  onChange={(value) => {
                    // create a React.ChangeEvent to pass the name and value
                    const event = {
                      target: {
                        name: field.name,
                        value
                      }
                    }
                    handleChange(event)
                    field.onChange(event)
                  }}>
                  <Stack direction="column">
                    {options?.map(({label, value}, idx) => {
                      return (
                        <Radio key={`${label}-${idx}`} value={value}>
                          <Text fontWeight="bold">{label}</Text>
                        </Radio>
                      )
                    })}
                  </Stack>
                </RadioGroup>
              )}

              {componentType === 'select' && (
                <Select
                  {...field}
                  onChange={(e) => {
                    // create a custom event to pass the name and value
                    handleChange(e)
                    field.onChange(e)
                  }}
                  isDisabled={disabled}>
                  <option></option>
                  {options?.map((option) => {
                    return (
                      <option key={`option-${option.value}`} value={option.value}>
                        {option.label}
                      </option>
                    )
                  })}
                </Select>
              )}

              {componentType === 'file-input' && <FileInputField {...field} />}
            </>
          )
        }}
      </Field>
      <FormErrorMessage>
        <>{errors[name]}</>
      </FormErrorMessage>
    </FormControl>
  )
}

interface PhoneInputProps {
  field: any
  handleBlur?: (e: any) => void
  handleChange?: (e: any) => void
  isDisabled?: boolean
}

const PhoneInput = ({field, handleBlur, handleChange = () => {}, isDisabled}: PhoneInputProps) => {
  const {setFieldValue, values} = useFormikContext<any>()

  const phoneInput = usePhoneInput({
    defaultCountry: 'ca',
    value: getIn(values, field.name),
    onChange: (value) => {
      // this is a hack to fix the issue with the phone input not being able to handle the value on the first render
      // TODO Adnan: find a better solution
      try {
        setFieldValue(field.name, value.phone)
      } catch (e) {
        // do nothing
      }
    }
  })

  return (
    <Box display="flex" gap={1}>
      <CountrySelector
        selectedCountry={phoneInput.country}
        onSelect={(country) => phoneInput.setCountry(country.iso2)}
        renderButtonWrapper={({children, rootProps}) => (
          <Button {...rootProps} variant="outline">
            {children}
          </Button>
        )}
        disabled={isDisabled}
      />
      <Input
        placeholder="Phone number"
        type="tel"
        color="primary"
        ref={phoneInput.inputRef}
        {...field}
        value={phoneInput?.phone || ''}
        onChange={phoneInput.handlePhoneValueChange}
        onBlur={handleBlur}
        isDisabled={isDisabled}
      />
    </Box>
  )
}
