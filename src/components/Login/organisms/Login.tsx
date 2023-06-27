import * as S from './style'
import LoginForm from '../molecules/LoginForm'

const Login = () => {
  return (
    <S.Wrapper>
      <S.LoginFormWrapper>
        <p>WHERE</p>
        <LoginForm />
      </S.LoginFormWrapper>
    </S.Wrapper>
  )
}

export default Login
