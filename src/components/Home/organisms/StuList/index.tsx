import { useEffect, useState } from 'react'
import StuItem from '../../atoms/StuItem'
import * as S from './style'
import { apiClient } from '@/utils/libs/apiClient'
import { getStudentList } from '@/api/user'
import dummyData from './dummyData'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isFetch } from '@/recoilAtoms'

interface StuListType {
  user: {
    name: string
    grade: string
    group: string
    number: string
  }
  where: string
}

const StuList = () => {
  const [list, setList] = useState<StuListType[]>()
  const [fetch, setFetch] = useRecoilState(isFetch)

  useEffect(() => {
    if (fetch) {
      ;(async () => {
        setList(await getStudentList())
      })()
      setFetch(false)
    }
  }, [fetch, setFetch])

  const stuNum = (item: StuListType) => {
    return (
      item.user.grade +
      item.user.group +
      (item.user.number.length == 1 ? '0' : '') +
      item.user.number
    )
  }

  return (
    <S.Layer>
      <StuItem stuNum="학번" name="이름" where="상태" filter />
      <S.List>
        {list?.map((item, key) => (
          <StuItem
            stuNum={stuNum(item)}
            name={item.user.name}
            where={item.where}
            key={key}
          />
        ))}
      </S.List>
    </S.Layer>
  )
}

export default StuList
