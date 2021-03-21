import { FC, useEffect } from "react";
import { useFormik } from 'formik'
import { Box, Button, TextField } from '@material-ui/core'

import { schema } from './schemas'
import { me, you } from './content'
import { AppContext } from './context'
import AddressForm from './AddressForm'

const App: FC = (): JSX.Element => {
  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: schema.getDefault(),
    validationSchema: schema,
    onSubmit: (val) => { console.log('submitted data', val) }
  })

  useEffect(() => {
    const isValidMe = schema.isValidSync(me)
    const isValidYou = schema.isValidSync(you)

    console.log('Me', isValidMe)
    console.log('You', isValidYou)
  }, [])

  return (
    <AppContext.Provider value={{ getFieldProps, errors }}>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Nome"
              {...getFieldProps('name')}
              helperText={errors.name}
              error={!!errors.name}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Sobrenome"
              {...getFieldProps('lastName')}
              helperText={errors.lastName}
              error={!!errors.lastName}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Idade"
              {...getFieldProps('age')}
              helperText={errors.age}
              error={!!errors.age}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Data de aniversário"
              {...getFieldProps('birthday')}
              helperText={errors.birthday}
              error={!!errors.birthday}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Email"
              {...getFieldProps('email')}
              helperText={errors.email}
              error={!!errors.email}
            />
          </Box>

          <AddressForm />

          <Box mb={2}>
            <TextField
              label="Telefone"
              {...getFieldProps('phone')}
              helperText={errors.phone}
              error={!!errors.phone}
            />
          </Box>

          <Box mb={2}>
            <Button type="submit">Enviar</Button>
          </Box>
        </form>
      </div>
    </AppContext.Provider>
  );
}

export default App;
