import { Dispatch, SetStateAction } from 'react'
import * as S from './style'

interface Props {
  state: string
  setState: Dispatch<SetStateAction<string>>
  isDropDown: boolean
  setDropDown: Dispatch<SetStateAction<boolean>>
}

const stateData = ['외출', '조퇴', '결석', '기타']

const StateDropDown = ({ state, setState, isDropDown, setDropDown }: Props) => {
  return (
    <S.Layer>
      <S.Header
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setDropDown(!isDropDown)
        }}
      >
        <span>{state}</span>
      </S.Header>
      {isDropDown && (
        <S.ItemContainer>
          {stateData.map((item, key) => (
            <S.ItemWrapper key={key} onClick={() => setState(item)}>
              {item}
            </S.ItemWrapper>
          ))}
        </S.ItemContainer>
      )}
    </S.Layer>
  )
}

export default StateDropDown
