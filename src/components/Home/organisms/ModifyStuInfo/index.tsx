import { ModalOverlay } from '@/components/common/Modal/style'
import * as S from './style'
import StateDropDown from '../../molecules/StateDropDown'
import { Dispatch, SetStateAction, useState } from 'react'
import { setStudentInfo } from '@/api/user'
import { useSetRecoilState } from 'recoil'
import { isFetch } from '@/recoilAtoms'

interface Props {
  isClick: boolean
  setClick: Dispatch<SetStateAction<boolean>>
  stuNum: string
  name: string
  where: string
}

const ModifyStuInfo = ({ isClick, setClick, name, stuNum, where }: Props) => {
  const [state, setState] = useState(where)
  const [isDropDown, setDropDown] = useState(false)
  const setFetch = useSetRecoilState(isFetch)

  const onSubmit = async () => {
    const isOk = await setStudentInfo(state)
    if (isOk) setFetch(true)
  }

  return (
    <ModalOverlay
      isClick={isClick}
      onClick={(e) => {
        e.stopPropagation()
        setClick(false)
      }}
    >
      <S.Layer
        onClick={(e) => {
          e.stopPropagation()
          setDropDown(false)
        }}
      >
        <S.TopWrapper>
          <h3>학생정보</h3>
          <S.CloseButton onClick={() => setClick(false)}>
            <span />
          </S.CloseButton>
        </S.TopWrapper>
        <S.MidWrapper>
          <h2>
            {stuNum} {name}
          </h2>
          <div
            onClick={(e) => {
              e.stopPropagation()
              setDropDown(false)
            }}
          >
            <h3>현재 상태:</h3>
            <StateDropDown
              state={state}
              setState={setState}
              isDropDown={isDropDown}
              setDropDown={setDropDown}
            />
          </div>
        </S.MidWrapper>
        <S.BotWrapper>
          <S.ModalButton isSubmit={false} onClick={() => setClick(false)}>
            취소
          </S.ModalButton>
          <S.ModalButton isSubmit onClick={onSubmit}>
            변경
          </S.ModalButton>
        </S.BotWrapper>
      </S.Layer>
    </ModalOverlay>
  )
}

export default ModifyStuInfo
