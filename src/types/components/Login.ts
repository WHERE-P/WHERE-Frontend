import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface LoginInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegisterReturn
  isValue?: boolean
}

export interface LoginForm {
  email?: string
  password?: string
}

export interface LoginBtnProps {
  text: string
  type: 'button' | 'submit'
  onClick?: () => void
}
