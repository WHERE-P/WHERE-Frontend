import * as S from './style'
import { useForm } from 'react-hook-form'
import LoginInput from '../../atoms/LoginInput'
import Button from '../../atoms/Button'
import { LoginForm } from '@/types/components/Login'
import { isNotNull } from '@/utils/isNotNull'
import { RegexsData } from '@/asset/data/RegexsData'

const LoginForm = () => {
  const { register, watch } = useForm<LoginForm>()

  return (
    <S.Wrapper>
      <S.InputsWrapper>
        <LoginInput
          register={register('email', {
            required: 'Enter Your Email!',
            pattern: {
              value: RegexsData.EMAIL,
              message: '이메일형식에 맞게 입력해주세요.',
            },
          })}
          type="text"
          placeholder="Enter Your Email."
        />
        <LoginInput
          register={register('password', {
            required: 'Enter Your Password!',
            pattern: {
              value: RegexsData.PASSWORD,
              message: '영문,숫자,특수문자 포함 8~20자로 입력해주세요.',
            },
          })}
          type="password"
          placeholder="Enter Your Password."
          maxLength={20}
          isValue={isNotNull(watch('password'))}
        />
      </S.InputsWrapper>
      <Button text={'로그인'} type="submit" />
    </S.Wrapper>
  )
}

export default LoginForm
