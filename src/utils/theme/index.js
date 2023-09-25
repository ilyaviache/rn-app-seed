import vars from './vars'
import light from './colors/light'
import dark from './colors/dark'

const THEMES = { light, dark }

export default function (theme = 'dark') {
  const colors = THEMES[theme] || dark
  return {...vars, colors}
}
