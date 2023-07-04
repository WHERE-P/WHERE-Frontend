import { useState } from 'react'
import * as S from './style'
import { FilterIcon } from '@/asset/svg'
import FilterCheck from '../../organisms/FilterCheck'
import ModifyStuInfo from '../../organisms/ModifyStuInfo'
import { stateData } from '@/asset/data/StateData'
import { Palette } from '@/styles/globals'

interface Props {
  stuNum: string
  name: string
  where: string
  filter?: boolean
}

const StuItem = ({ stuNum, name, where, filter = false }: Props) => {
  const [isFilterCheck, setFilterCheck] = useState<boolean>(false)
  const [modify, setModify] = useState<boolean>(false)

  const stateColor = () => {
    const color = stateData.find((item) => item.state === where)
    return !!color ? color : { state: '', color: '' }
  }

  return (
    <S.Layer filter={filter} onClick={() => setModify(true)}>
      <h3>{stuNum}</h3>
      <h3>{name}</h3>
      <S.StateText color={stateColor()?.color}>{where}</S.StateText>
      <S.FilterBox onClick={() => setFilterCheck(!isFilterCheck)}>
        {filter && (
          <>
            <FilterIcon />
            <h3>필터</h3>
          </>
        )}
      </S.FilterBox>

      {isFilterCheck && <FilterCheck />}

      {!filter && (
        <ModifyStuInfo
          isClick={modify}
          setClick={setModify}
          stuNum={stuNum}
          name={name}
          where={where}
        />
      )}
    </S.Layer>
  )
}

export default StuItem
