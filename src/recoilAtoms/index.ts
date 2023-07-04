import { group } from 'console'
import { atom } from 'recoil'

export const isFetch = atom<boolean>({
  key: 'isFetch',
  default: true,
})

// export const filterData = atom({
//   key: 'filterData',
//   default: {
//     grade: ''
//     group: ''
//     name
//   }
// })
