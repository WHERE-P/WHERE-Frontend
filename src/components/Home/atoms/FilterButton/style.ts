import { Palette } from '@/styles/globals'
import styled from '@emotion/styled'

export const Layer = styled.div`
  input {
    display: none;
  }
  input:checked + label,
  input:hover + label {
    border: 3px solid ${Palette.PRIMARY_P2};
    padding: 6px 0;
  }
  label {
    width: 3em;
    padding: 8px 0;
    border: 1px solid ${Palette.NEUTRAL_N3};
    border-radius: 50px;
    display: block;
    text-align: center;
    cursor: pointer;
  }
`
