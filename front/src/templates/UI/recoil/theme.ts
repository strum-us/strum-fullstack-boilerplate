import { atom } from 'recoil'

export const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'dark',
})
