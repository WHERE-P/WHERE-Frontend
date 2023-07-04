import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${Palette.WHITE};
  top: -12px;
  left: 100px;
  border-radius: 8px;
  cursor: pointer;
`

export const Header = styled.div`
  width: 100%;
  border: 1px solid ${Palette.NEUTRAL_N4};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
`

export const ItemContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Palette.NEUTRAL_N4};
  border-radius: 8px;
  font-size: 16px;
  overflow: hidden;
`

export const ItemWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  font-size: 16px;
  color: ${({ color }: { color: string }) => color};

  :hover {
    background-color: ${Palette.NEUTRAL_N5};
  }
`
