import * as S from './style'
import { useState } from 'react'
import { LoginInputProps } from '@/types/components/Login'
import { EyeCloseIcon, EyeIcon } from '@/asset/svg'

const LoginInput = ({
  register,
  type,
  placeholder,
  maxLength,
  isValue,
  onSubmit,
  readOnly,
}: LoginInputProps) => {
  const [hidePW, setHidePW] = useState(false)

  const handelIcon = () => setHidePW((e) => !e)

  return (
    <S.Input onSubmit={onSubmit}>
      <label>
        <input
          {...register}
          readOnly={readOnly}
          placeholder={placeholder}
          type={hidePW ? 'text' : type}
          maxLength={maxLength}
        />
        {isValue && type === 'password' && (
          <div onClick={handelIcon}>
            {hidePW ? <EyeIcon /> : <EyeCloseIcon />}
          </div>
        )}
      </label>
    </S.Input>
  )
}

export default LoginInput
