import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const ModalOverlay = styled.div`
  visibility: ${({ isClick }: { isClick: boolean }) =>
    isClick ? 'visible' : 'hidden'};
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.45);
  z-index: 5;
  justify-content: center;
  align-items: center;
  position: fixed;
`
