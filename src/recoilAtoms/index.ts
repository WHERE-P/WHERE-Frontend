import { group } from 'console'
import { atom } from 'recoil'

export const isFetch = atom<boolean>({
  key: 'isFetch',
  default: true,
})

export const filterData = atom<{
  grade?: string
  group?: string
  name?: string
}>({
  key: 'filterData',
  default: {},
})
