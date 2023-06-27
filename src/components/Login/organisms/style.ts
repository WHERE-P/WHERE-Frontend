import styled from '@emotion/styled'
import { Palette } from '@/styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.BACKGROUND_BG2};
`

export const LoginFormWrapper = styled.div`
  width: 552px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 56px;
  border-radius: 50px;
  background: ${Palette.BACKGROUND_CARD};

  p {
    color: ${Palette.NEUTRAL_N1};
    font-size: 48px;
    font-weight: 700;
  }
`
