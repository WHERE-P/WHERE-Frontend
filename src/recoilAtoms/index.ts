import { atom } from 'recoil'

export const isFetch = atom<boolean>({
  key: 'isFetch',
  default: true,
})
