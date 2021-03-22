import { FC } from 'react'
import MaskedInput from 'react-text-mask'

import { phoneMask } from './validation'

type TProps = {
  inputRef: any,
  rest: any
}

const PhoneMaskedInput: FC<TProps> = ({ inputRef, ...rest }): JSX.Element => {
  return (
    <MaskedInput
      {...rest}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={phoneMask}
    />
  )
}

export default PhoneMaskedInput