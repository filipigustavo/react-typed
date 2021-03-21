import * as yup from 'yup'
import type { TypeOf } from 'yup'

export const phoneReg = /^(\(\d{2}\))(\s)(\d{4,5})-(\d{4})$/

export const schema = yup.object({
  name: yup.string().required().default(''),
  lastName: yup.string().required().default(''),
  age: yup.number().required().min(18).default(0),
  birthday: yup.date().required().default(new Date()),
  email: yup.string().email().required().default(''),
  address: yup.object({
    street: yup.string().required().default(''),
    number: yup.number().min(1).required().default(0),
    complement: yup.string().notRequired().default(''),
    district: yup.string().required().default('')
  }),
  phone: yup.string().matches(phoneReg, "phone is not valid").notRequired().default('')
})

export interface ISchema extends TypeOf<typeof schema> {}
