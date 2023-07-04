import { getStudentList } from '@/api/user'
import { filterData, isFetch } from '@/recoilAtoms'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import StuItem from '../../atoms/StuItem'
import * as S from './style'

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
  const filter = useRecoilValue(filterData)

  const SetList = async () => {
    setList(await getStudentList(filter.grade, filter.group, filter.name))
  }

  useEffect(() => {
    if (fetch) {
      SetList()
    }
  }, [fetch, setFetch])
  useEffect(() => {
    SetList()
  }, [filter])

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
