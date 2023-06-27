import * as S from './style'
import { FilterIcon } from '@/asset/svg'

interface Props {
  stuNum: string
  name: string
  where: string
  filter?: boolean
}

const StuItem = ({ stuNum, name, where, filter = false }: Props) => {
  return (
    <S.Layer>
      <h3>{stuNum}</h3>
      <h3>{name}</h3>
      <h3>{where}</h3>
      <S.FilterBox>
        {filter && (
          <>
            <FilterIcon />
            <h3>필터</h3>
          </>
        )}
      </S.FilterBox>
    </S.Layer>
  )
}

export default StuItem
