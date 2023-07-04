import { UseFormRegisterReturn } from 'react-hook-form'
import { Layer } from './style'

interface Props {
  value: string
  checked?: boolean
  register: UseFormRegisterReturn
}

const FilterButton = ({ value, checked = false, register }: Props) => {
  return (
    <Layer>
      <input
        type="radio"
        {...register}
        id={register.name + value}
        value={value}
      />
      <label htmlFor={register.name + value}>{value}</label>
    </Layer>
  )
}

export default FilterButton
