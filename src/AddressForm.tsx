import { FC } from 'react'
import { Box, TextField } from '@material-ui/core'

import { useApp } from 'context'

type TProps = {}

const AddressForm: FC<TProps> = (): JSX.Element => {
  const { formik: { getFieldProps, errors } } = useApp()

  return <fieldset>
    <legend>Endereço</legend>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Rua"
        helperText={errors.address?.street ?? ''}
        error={!!errors.address?.street ?? ''}
        {...getFieldProps('address.street')}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Número"
        helperText={errors.address?.number ?? ''}
        error={!!errors.address?.number ?? ''}
        {...getFieldProps('address.number')}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Complemento"
        helperText={errors.address?.complement ?? ''}
        error={!!errors.address?.complement ?? ''}
        {...getFieldProps('address.complement')}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Bairro"
        helperText={errors.address?.district ?? ''}
        error={!!errors.address?.district ?? ''}
        {...getFieldProps('address.district')}
      />
    </Box>
  </fieldset>
}

export default AddressForm