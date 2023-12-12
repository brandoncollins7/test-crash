import React, {useEffect, useState} from 'react'
import {FileUploader} from 'react-drag-drop-files'
import getConfig from 'next/config'
import {AspectRatio, Box, Heading, Image, Spinner, Text} from '@chakra-ui/react'
import {useFormikContext} from 'formik'
import {DownloadIcon} from '@chakra-ui/icons'

const fileTypes = ['JPG', 'PNG', 'PDF']

interface FileInputFieldProps {
  name: string
  value?: string
  onChange?: () => void
  onBlur?: () => void
}

type status = 'empty' | 'uploading' | 'uploaded' | 'error'

// This an MVP file input field, it should be improved to handle errors and other states
// TODO Adnan: improve this component
export const FileInputField = ({name, value, onChange, onBlur}: FileInputFieldProps) => {
  const {publicRuntimeConfig} = getConfig()
  const {setFieldValue} = useFormikContext<any>()

  const [status, setStatus] = useState<status>('empty')
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState('')

  const FILE_UPLOAD_URI = `${publicRuntimeConfig.services.baseApi.host}/api/v1/core/uploads`

  const [file, setFile] = useState<any>(null)
  const handleChange = (file: any) => {
    setFile(file)
  }

  useEffect(() => {
    if (value) {
      setStatus('uploaded')
    }
  }, [value])

  useEffect(() => {
    if (!file || value) return

    const uploadFile = async () => {
      const formData = new FormData()
      formData.append('file', file, file.name)
      setStatus('uploading')
      const response = await fetch(FILE_UPLOAD_URI, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        setFieldValue(name, data.url)
      } else {
        console.debug('error', response)
      }
    }
    uploadFile()
  }, [file, value])

  return (
    <FileUploader handleChange={handleChange} multiple={false} maxSize={1} name={name} types={fileTypes}>
      <Box w="100%" border="solid 1px black" rounded={4} borderColor="gray.200">
        {status === 'empty' && (
          <Box textAlign="center" p={4} py={8} color="neutral4" bgColor="gray.50" cursor="pointer">
            <DownloadIcon boxSize={8} />
            <Text> Drag & drop a file here or choose a file </Text>
            <Text fontWeight="bold"> ({fileTypes.join(', ')})</Text>
          </Box>
        )}
        {status === 'uploading' && (
          <Box textAlign="center" p={4} py={8} color="neutral4" bgColor="gray.50" cursor="pointer">
            <Spinner boxSize={8} />
            <Heading size="md">Uploading...</Heading>
            <Text>{progress}%</Text>
          </Box>
        )}
        {status === 'uploaded' && (
          <Box
            onClick={(e) => {
              window.open(url)
              e.stopPropagation()
            }}
            textAlign="center"
            p={4}
            py={8}
            color="neutral4"
            bgColor="gray.50"
            cursor="pointer">
            <AspectRatio maxW="100%" w="100px" ratio={1} rounded={4} overflow="hidden" m="auto">
              <Image src={value} alt="naruto" objectFit="contain" />
            </AspectRatio>
          </Box>
        )}
      </Box>
    </FileUploader>
  )
}
