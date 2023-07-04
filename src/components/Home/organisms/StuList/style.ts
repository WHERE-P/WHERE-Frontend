import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  height: 85%;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  background-color: ${Palette.BACKGROUND_CARD};
  overflow: hidden;
`

export const List = styled.div`
  height: calc(100% - 64px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`
