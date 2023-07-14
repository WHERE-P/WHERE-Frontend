import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FilterBox from '../../molecules/FilterBox'
import * as S from './style'
import { useSetRecoilState } from 'recoil'
import { filterData, isFetch } from '@/recoilAtoms'

const FilterCheck = () => {
  const { register, reset, watch } = useForm({
    defaultValues: {
      name: '',
      grade: '',
      group: '',
    },
  })

  const setFilterData = useSetRecoilState(filterData)
  const setFetch = useSetRecoilState(isFetch)

  const onSubmit = () => {
    setFilterData({
      grade: watch('grade'),
      group: watch('group'),
      name: watch('name'),
    })
  }

  useEffect(() => {
    console.log('tlqkf')
    onSubmit()
  }, [watch('grade'), watch('group')])
  return (
    <S.Layer>
      <S.TopWrapper>
        <h4>필터</h4>
        <h5
          onClick={() => {
            reset()
            setFetch(true)
          }}
        >
          초기화
        </h5>
      </S.TopWrapper>
      <S.InputBox>
        <input placeholder="Enter Name" {...register('name')} />
        <button onClick={() => onSubmit()}>검색</button>
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
