import * as S from './style'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import LoginInput from '../../atoms/LoginInput'
import Button from '../../atoms/Button'
import { LoginForm } from '@/types/components/Login'
import { isNotNull } from '@/utils/isNotNull'
import { RegexsData } from '@/asset/data/RegexsData'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { login } from '@/api/user'

const LoginForm = () => {
  const router = useRouter()
  const { register, watch, handleSubmit } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = async (e) => {
    console.log('success')

    if (await login(e.email, e.password)) {
      router.push('/')
    }
  }
  const onError: SubmitErrorHandler<LoginForm> = (e) => {
    console.log('error')
    console.log(e)

    // toast.error(e.email?.message || e.password?.message)
  }

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
          })}
          type="password"
          placeholder="Enter Your Password."
          maxLength={20}
          isValue={isNotNull(watch('password'))}
        />
      </S.InputsWrapper>
      <Button
        text={'로그인'}
        type="submit"
        onClick={handleSubmit(onSubmit, onError)}
        // onClick={() => console.log('asd')}
      />
    </S.Wrapper>
  )
}

export default LoginForm
