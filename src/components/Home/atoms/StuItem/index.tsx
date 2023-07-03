import { useState } from 'react'
import * as S from './style'
import { FilterIcon } from '@/asset/svg'
import FilterCheck from '../../organisms/FilterCheck'

interface Props {
  stuNum: string
  name: string
  where: string
  filter?: boolean
}

const StuItem = ({ stuNum, name, where, filter = false }: Props) => {
  const [isFilterCheck, setFilterCheck] = useState<boolean>(false)
  return (
    <S.Layer filter={filter}>
      <h3>{stuNum}</h3>
      <h3>{name}</h3>
      <h3>{where}</h3>
      <S.FilterBox onClick={() => setFilterCheck(!isFilterCheck)}>
        {filter && (
          <>
            <FilterIcon />
            <h3>필터</h3>
          </>
        )}
      </S.FilterBox>
      {isFilterCheck && <FilterCheck />}
    </S.Layer>
  )
}

export default StuItem
