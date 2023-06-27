import { LoginBtnProps } from '@/types/components/Login'
import * as S from './style'

const Button = ({ text, type, onClick }: LoginBtnProps) => {
  return (
    <S.ButtonWrapper type={type} onClick={onClick}>
      {text}
    </S.ButtonWrapper>
  )
}

export default Button
