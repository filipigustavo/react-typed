import { FC } from "react";
import { Box, TextField, Button } from '@material-ui/core'

import { useApp } from "context";
import AddressForm from './AddressForm'
import PhoneMaskedInput from "./PhoneMaskedInput";

const SchemaForm: FC = (): JSX.Element => {
  const { formik: { getFieldProps, handleSubmit, errors } } = useApp()

  return <form onSubmit={handleSubmit}>
    <Box mb={2}>
      <TextField
        fullWidth
        label="Nome"
        {...getFieldProps('name')}
        helperText={errors.name}
        error={!!errors.name}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Sobrenome"
        {...getFieldProps('lastName')}
        helperText={errors.lastName}
        error={!!errors.lastName}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Idade"
        {...getFieldProps('age')}
        helperText={errors.age}
        error={!!errors.age}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Data de aniversário"
        {...getFieldProps('birthday')}
        helperText={errors.birthday}
        error={!!errors.birthday}
      />
    </Box>

    <Box mb={2}>
      <TextField
        fullWidth
        label="Email"
        {...getFieldProps('email')}
        helperText={errors.email}
        error={!!errors.email}
      />
    </Box>

    <AddressForm />

    <Box mt={2} mb={2}>
      <TextField
        fullWidth
        label="Telefone"
        {...getFieldProps('phone')}
        helperText={errors.phone}
        error={!!errors.phone}
        InputProps={{
          inputComponent: PhoneMaskedInput
        }}
      />
    </Box>

    <Box mb={2}>
      <Button type="submit" variant="contained" color="primary">Enviar</Button>
    </Box>
  </form>
}

export default SchemaForm
