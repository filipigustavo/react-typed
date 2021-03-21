import { FC, useEffect } from "react";
import { useFormik } from 'formik'

import { schema } from './schemas'
import { me, you } from './content'
import { AppContext } from './context'
import SchemaForm from './SchemaForm'

const App: FC = (): JSX.Element => {
  const formik = useFormik({
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
    <AppContext.Provider value={{ formik }}>
      <div className="App">
        <SchemaForm />
      </div>
    </AppContext.Provider>
  );
}

export default App;
