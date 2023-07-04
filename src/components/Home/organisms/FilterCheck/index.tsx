import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FilterBox from '../../molecules/FilterBox'
import * as S from './style'

const FilterCheck = () => {
  const { register, reset, watch } = useForm({
    defaultValues: {
      name: '',
      grade: '',
      group: '',
    },
  })

  useEffect(() => {}, [watch()])
  return (
    <S.Layer>
      <S.TopWrapper>
        <h4>필터</h4>
        <h5 onClick={() => reset()}>초기화</h5>
      </S.TopWrapper>
      <S.InputBox>
        <input placeholder="Enter Name" {...register('name')} />
        <button>검색</button>
      </S.InputBox>
      <FilterBox
        title={'학년'}
        data={['1', '2', '3']}
        register={register('grade')}
      />
      <FilterBox
        title={'반'}
        data={['1', '2', '3', '4']}
        register={register('group')}
      />
    </S.Layer>
  )
}

export default FilterCheck
