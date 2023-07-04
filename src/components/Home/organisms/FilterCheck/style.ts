import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 260px;
  padding: 28px 21px;
  position: absolute;
  background: ${Palette.BACKGROUND_CARD};
  top: 80px;
  right: 20px;
  z-index: 1;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  gap: 24px;
  flex-direction: column;
`

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    cursor: pointer;
  }
  h5 {
    color: ${Palette.NEUTRAL_N2};
  }
`

export const InputBox = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid ${Palette.NEUTRAL_N3};
  border-radius: 8px;

  input {
    width: calc(100% - 2em);
    font-size: 16px;
    ::placeholder {
      color: ${Palette.NEUTRAL_N3};
      transition: color 0.3s;
    }
    :focus::placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }

  button {
    width: 2em;
    background-color: inherit;
    font-size: 16px;
  }
`
