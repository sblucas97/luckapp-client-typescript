import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      blue400: string
      green300: string
      green200: string
      blue100: string
      primary: string
      secondary: string
      terciary: string
      quaternary: string
      quinaria: string
    }
    space: []

    sizes: {
      large: string
      big: number
      regular: number
      small: number
    }
  }
}
