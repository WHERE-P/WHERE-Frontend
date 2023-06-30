import { UseFormRegisterReturn } from 'react-hook-form'
import FilterButton from '../../atoms/FilterButton'
import * as S from './style'

interface Props {
  title: string
  data: string[]
  register: UseFormRegisterReturn
}

const FilterBox = ({ title, data, register }: Props) => {
  return (
    <S.Layer>
      <p>{title}</p>
      <S.FilterList>
        {data.map((item, key) => (
          <FilterButton value={item} key={key} register={register} />
        ))}
      </S.FilterList>
    </S.Layer>
  )
}

export default FilterBox
