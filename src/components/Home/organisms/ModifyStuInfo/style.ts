import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  width: 460px;
  height: 330px;
  border-radius: 16px;
  background-color: ${Palette.WHITE};
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    width: 100%;
    display: flex;
  }
`

export const TopWrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  span {
    width: 25px;
    height: 4px;
    transform: rotate(45deg);
    background: ${Palette.BLACK};
    display: block;

    ::after {
      content: '';
      width: 25px;
      height: 4px;
      transform: rotate(90deg);
      background: ${Palette.BLACK};
      display: block;
    }
  }
`

export const CloseButton = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const MidWrapper = styled.div`
  flex-direction: column;
  gap: 52px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
  }
`

export const BotWrapper = styled.div`
  justify-content: space-between;
`

export const ModalButton = styled.button<{ isSubmit: boolean }>`
  width: 48%;
  padding: 12px 0;
  border: 1px solid
    ${({ isSubmit }) => (isSubmit ? Palette.SUB_RED : Palette.NEUTRAL_N3)};
  color: ${({ isSubmit }) => (isSubmit ? Palette.SUB_RED : Palette.NEUTRAL_N3)};
  border-radius: 8px;
  background: inherit;
  font-size: 20px;
`
