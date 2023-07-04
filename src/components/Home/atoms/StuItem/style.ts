import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 3% 0 8%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ filter }: { filter: boolean }) =>
    filter ? Palette.WHITE : Palette.BACKGROUND_BG};

  :nth-of-type(n) {
    background-color: ${({ filter }: { filter: boolean }) =>
      filter ? Palette.WHITE : Palette.BACKGROUND_BG};
  }
  :nth-of-type(2n) {
    background-color: ${Palette.WHITE};
  }

  > h3 {
    flex: 1.5;
  }
  > h3:nth-of-type(3) {
    flex: 4;
  }
  > h3:nth-of-type(4) {
    flex: 0 0 4em;
  }
`

export const StateText = styled.h3`
  flex: 4;
  color: ${({ color }: { color: string }) => color};
`

export const FilterBox = styled.div`
  display: flex;
  gap: 8px;
  width: 4.5em;
  cursor: pointer;
`
