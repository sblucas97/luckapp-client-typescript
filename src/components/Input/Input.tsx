import React from 'react'
import styled from 'styled-components'

import { Column } from 'components'
import { ColumnProps } from 'components/Column'

interface InputProps extends ColumnProps {
  name: string
  register(): void
}

const InputComponent: React.FC<InputProps> = ({ name, register, ...props }) => {
  return (
    <Column {...props}>
      <Input name={name} ref={register} />
    </Column>
  )
}

const Input = styled.input`
  height: 40px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid black;
`

InputComponent.defaultProps = {
  width: 'regular'
}

export default InputComponent
