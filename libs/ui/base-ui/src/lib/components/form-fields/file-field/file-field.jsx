/* global window, FormData, XMLHttpRequest */
import React, {useCallback, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import {LinearProgress} from '../../progress/linear-progress'
import {IconButton} from '../../buttons/icon-button'
import {FormField} from '@rmwc/formfield'
import {Icon, TextFieldHelperText, Typography} from '@frnt/base'
import {getIn, useFormikContext} from 'formik'

// TODO Adnan: Fix file field to allow for multiple file uploads
// TODO Adnan: Write docs,tests and compose this component
const FileField = ({
  field,
  form: {setFieldValue, errors, touched, setFieldTouched},
  helperText,
  handleChange = () => {
    // Do nothing.
  },
  handleBlur = () => {
    // Do nothing.
  },
  maxFiles = 4,
  maxSize = 10 * 1000000, // Bytes.
  accept = ['image/*'],
  uploadUri = '',
  inputName = 'file',
  disabled,
  authToken,
  meta
}) => {
  const {setFieldError} = useFormikContext()
  let error = getIn(touched, field.name) && getIn(errors, field.name)

  const [fileMap, setFileMap] = useState({})
  const dropzoneRef = useRef(null)

  const onUploadProgress = (fileUrl, progress) => {
    setFileMap((prev) => {
      return {
        ...prev,
        [fileUrl]: {
          ...prev[fileUrl],
          progress
        }
      }
    })
  }

  useEffect(() => {
    const file = field.value || {}
    const newFileMap = {}
    if (!file.url) return

    newFileMap[file.url] = {
      url: file.url,
      name: file.name,
      progress: 100,
      err: null
    }
    setFileMap(newFileMap)
  }, [field.value])

  const onUploadError = (fileUrl, err) => {
    setFileMap((prev) => {
      const fileMap = {...prev}
      if (!fileMap[fileUrl]) return fileMap
      fileMap[fileUrl].err = err
      return fileMap
    })
    setFieldError(field.name, `Could not upload file(s), please try again.`)
    setFieldTouched(field.name, true)
  }
  const onUploadFinish = (fileUrl, url) => {
    setFileMap((prev) => {
      const newFileMap = {
        ...prev,
        [url]: {
          ...prev[fileUrl],
          url,
          progress: 100
        }
      }
      delete newFileMap[fileUrl]
      handleInternalChange(newFileMap)
      return newFileMap
    })
  }

  const handleFileDeleteClick = (fileUrl) => {
    setFileMap((prev) => {
      const {[fileUrl]: _, ...newFileMap} = prev
      handleInternalChange(newFileMap)
      return newFileMap
    })
  }
  const handleInternalChange = (fileMap) => {
    const uploadedFiles = Object.values(fileMap)
      .filter((file) => file && file.progress === 100 && !file.err)
      .map((file) => ({url: file.url, name: file.name}))

    if (!uploadedFiles.length) {
      setFieldValue(field.name, null)
      handleChange(null, field.name, field)
    } else {
      const file = uploadedFiles[0]
      setFieldValue(field.name, file)
      handleChange(file, field.name, field)
    }

    setFieldTouched(field.name, true)
    // Hack to wait for new value to be applied
    // Pending https://github.com/jaredpalmer/formik/issues/529
    // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
    setTimeout(() => {
      handleBlur()
    }, 0)
  }

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const errorMessage = rejectedFiles.reduce((message, file) => {
        const fileErrors = file.errors.map((error) => error.message).join('\n')
        return message + fileErrors + '\n'
      }, '')

      if (errorMessage !== '') {
        error = errorMessage
      } else {
        error = null
      }

      acceptedFiles.forEach((file) => {
        const fileUrl = URL.createObjectURL(file) // Preview.
        const newFileMap = {
          url: fileUrl,
          name: file.name,
          progress: 0,
          err: null
        }
        setFileMap((prev) => {
          return {
            ...prev,
            [fileUrl]: newFileMap
          }
        })
        const xhr = new XMLHttpRequest()
        xhr.open('POST', uploadUri, true)
        if (authToken) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + authToken)
        }
        xhr.onload = () => {
          if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
              return onUploadFinish(fileUrl, JSON.parse(xhr.response).url)
            } else {
              return onUploadError(fileUrl, new Error(`Upload error: ${xhr.status}`))
            }
          }
        }
        xhr.onerror = () => {
          return onUploadError(fileUrl, new Error(`Upload error.`))
        }
        xhr.upload.onprogress = (e) => {
          let percentLoaded = null
          if (e.lengthComputable) {
            percentLoaded = Math.round((e.loaded / e.total) * 100)
            return onUploadProgress(fileUrl, percentLoaded)
          }
        }
        const formData = new FormData()
        formData.append(inputName, file, file.name)
        xhr.send(formData)
      })
    },
    [authToken, fileMap, inputName, onUploadFinish, uploadUri]
  )

  return (
    <FormField style={{flexDirection: 'column', alignItems: 'normal', width: '100%'}}>
      <Dropzone
        ref={dropzoneRef}
        onDrop={onDrop}
        multiple={maxFiles > 1}
        maxSize={maxSize}
        accept={Object.fromEntries(accept.map((type) => [type, []]))}
        name={inputName}
        disabled={disabled}
        noClick={true}>
        {({getRootProps, getInputProps, isDragActive, isDragReject}) => {
          const dragState = getDraggingState({isDragActive, isDragReject, fileMap, error})
          return (
            <>
              <div {...getRootProps()} className={classNames('dropzone', {'dropzone--isActive': isDragActive})} style={{padding: '0.5rem 0'}}>
                <StyledDropDiv dragState={dragState}>
                  <input {...getInputProps()} />
                  {!isDragActive && Object.keys(fileMap).length !== 0 && (
                    <StyledUploadsWrapper>
                      {Object.values(fileMap).map((file, idx) => {
                        const {url, name, progress, err} = file
                        let type = ''
                        let size = ''
                        return (
                          <UploadThumbnail
                            key={idx}
                            url={url}
                            type={type}
                            size={size}
                            name={name}
                            progress={progress}
                            err={err}
                            handleFileDownloadClick={() => window.open(url)}
                            handleFileDeleteClick={!disabled ? handleFileDeleteClick : undefined}
                          />
                        )
                      })}
                    </StyledUploadsWrapper>
                  )}
                  {(Object.keys(fileMap).length === 0 || isDragActive) && (
                    <div
                      style={{
                        padding: '0.5rem',
                        color: 'var(--mdc-theme-primary)',
                        textAlign: 'center'
                      }}>
                      <Icon theme="primary" icon={{icon: 'file_download', color: 'inherit'}} />
                      <Typography tag="p" use="body-small-regular" theme="primary" style={{margin: 0}}>
                        Drag & drop a file here
                        <br />
                        or{' '}
                        <a style={{color: 'var(--mdc-theme-primary2)', cursor: 'pointer'}} onClick={() => !disabled && dropzoneRef.current.open()}>
                          choose file
                        </a>
                      </Typography>
                    </div>
                  )}
                </StyledDropDiv>
              </div>
              {(error || isDragReject) && (
                <TextFieldHelperText persistent validationMsg>
                  {/* TODO Adnan: Update supported document using props.accept */}
                  {error || 'Unsupported document type. Only .jpeg, .pdf, .png file types are supported.'}
                </TextFieldHelperText>
              )}
              {!error && <TextFieldHelperText>{helperText}</TextFieldHelperText>}
            </>
          )
        }}
      </Dropzone>
    </FormField>
  )
}

const UploadThumbnail = ({url, name, type, progress, err, handleFileDeleteClick, handleFileDownloadClick}) => {
  // Fetching the file using the url to get the file type and size is not working due to CORS
  // TODO Adnan: Use fetch method for type & size and display preview when Brandon's whitelist localhost:5002 for CORS
  const [isImage, setIsImage] = useState(true)

  return (
    <StyledUploadWrapper>
      <div style={{display: 'flex', alignItems: 'center', gap: '0.1rem'}}>
        <StyledImageWrapper onClick={handleFileDownloadClick}>
          {isImage ? <img src={url} onError={() => setIsImage(false)} style={{width: '100%'}} /> : <Icon icon="description" style={{width: '100%', fontSize: '2.5rem'}} />}
        </StyledImageWrapper>
        <div>
          <Typography use="body-small-regular" tag="p" style={{margin: 0}}>
            {name?.length > 20 ? `${name.slice(0, 20)}...` : name}
          </Typography>
        </div>
      </div>
      {!err && progress !== 100 && <LinearProgress theme={['secondary3']} progress={progress} />}
      {(err || progress === 100) && handleFileDeleteClick !== undefined && <StyledIconButton icon="highlight_off" onClick={() => handleFileDeleteClick(url)} />}
    </StyledUploadWrapper>
  )
}

UploadThumbnail.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  progress: PropTypes.number,
  err: PropTypes.object,
  handleFileDeleteClick: PropTypes.func,
  handleFileDownloadClick: PropTypes.func
}

const StyledUploadWrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledUploadsWrapper = styled.div`
  &&& {
    padding: 1rem;
  }
`
const StyledImageWrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 3rem;
    width:3rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    cursor:pointer;
`

const StyledIconButton = styled(IconButton)`
  &&& {
    font-size: 1rem;
    color: var(--mdc-theme-neutral4);
    white-space: nowrap;
  }
`

const getDraggingState = ({isDragActive, isDragReject, fileMap, error}) => {
  if (isDragReject || error) {
    return 'drag_reject'
  } else if (isDragActive && !isDragReject) {
    return 'drag_active'
  } else if (!isDragActive && fileMap && Object.keys(fileMap).length > 0) {
    return 'successful_upload'
  } else {
    return 'drag_default'
  }
}
// TODO Adnan: Replace #F1F2FB with theme color secondary9 when base-ui is updated
const StyledDropDiv = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  background: var(--mdc-theme-neutral2);
  border: 2px dashed var(--mdc-theme-neutral4);
  ${({dragState}) =>
    dragState === 'drag_active'
      ? `
      background: #F1F2FB;
      border: 2px solid var(--mdc-theme-secondary5);
    `
      : dragState === 'drag_reject'
      ? `
      background: var(--mdc-theme-neutral);
      border: 2px solid var(--mdc-theme-error);
    `
      : dragState === 'successful_upload'
      ? `
      background: 2px solid var(--mdc-theme-neutral);
      border: 2px solid var(--mdc-theme-neutral4);
    `
      : `
      `}
`

export const fileFieldPropTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  authToken: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  inputName: PropTypes.string,
  label: PropTypes.string,
  maxFiles: PropTypes.number,
  maxSize: PropTypes.number,
  handleUploadFinish: PropTypes.func,
  handleUploadProgress: PropTypes.func,
  uploadUri: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  field: PropTypes.object,
  form: PropTypes.object,
  meta: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
}

FileField.propTypes = fileFieldPropTypes
export {FileField}
