import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const header = styled.header`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 16px 40px;
  position: sticky;
  top: 24px;
  z-index: 2;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  position: relative;
  width: 50px;
  height: 55px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 8px;
    color: ${Palette.PRIMARY_P1};
    font-size: 24px;
    font-weight: 700;
  }
`

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: ${Palette.NEUTRAL_N1};
  font-size: 18px;
  font-weight: 700;
`
