import styled from '@emotion/styled'
import { Palette } from '@/styles/globals'

export const Input = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 440px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: none;
    font-size: 16px;
    font-weight: 500;
    color: ${Palette.NEUTRAL_N3};
    border: none;
    border: 1px solid ${Palette.NEUTRAL_N3};
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    padding: 12px 32px;
    ::placeholder {
      color: ${Palette.NEUTRAL_N3};
    }
    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${Palette.WHITE} inset !important;
      -webkit-text-fill-color: ${Palette.BLACK} !important;
    }
    :focus {
      border: 1px solid ${Palette.PRIMARY_P2};
      color: ${Palette.NEUTRAL_N1};
    }
  }

  svg {
    position: absolute;
    top: 13px;
    right: 24px;
    cursor: pointer;
  }
`
