import { ISchema } from './schemas'

export const me: ISchema = {
  name: "Filipi",
  lastName: "Silva",
  age: 33,
  birthday: new Date(1987, 7, 21),
  email: "filipigustavo@gmail.com",
  address: {
    street: "Minha Rua",
    number: 10,
    complement: "apto 202",
    district: "Meu Bairro"
  },
  phone: "(41) 98899-1234"
}

export const you: ISchema = {
  name: "Bastião",
  lastName: "Silva",
  age: 18,
  birthday: new Date(1987, 7, 21),
  email: "filipigustavo@gmail.com",
  address: {
    street: "Minha Rua",
    number: 10,
    complement: "",
    district: "Meu Bairro"
  },
  phone: "(41) 98899-1234"
}