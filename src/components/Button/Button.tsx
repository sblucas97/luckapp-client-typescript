import React from 'react'
import styled from 'styled-components'
import {
  variant,
  space,
  layout,
  color,
  border,
  position,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps
} from 'styled-system'

export interface ButtonProps extends SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps {
  variant: string
}

const ButtonComponent: React.FC<ButtonProps> = styled.button`
  ${variant({
    variants: {
      primary: {
        bg: 'primary',
        color: 'black'
      },
      secondary: {
        bg: 'secondary',
        color: 'primary'
      }
    }
  })}
  height: 40px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid black;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
`

ButtonComponent.defaultProps = {
  width: 'regular'
}

export default ButtonComponent
