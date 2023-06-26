import React from 'react'
import { Global, css } from '@emotion/react'

export const Palette = {
  PRIMARY_P1: '#146a60',
  PRIMARY_P2: '#51846d',
  PRIMARY_P3: '#819e7f',
  PRIMARY_P4: '#AEB897',
  PRIMARY_P5: '#d8d2b7',
  PRIMARY_P6: '#ffefdb',
  NEUTRAL_N1: '#292E3D',
  NEUTRAL_N2: '#656B80',
  NEUTRAL_N3: '#BBBBCC',
  NEUTRAL_N4: '#E2E2EE',
  NEUTRAL_N5: '#F2F2F4',
  BACKGROUND_BG: '#F7F7F9',
  BACKGROUND_BG2: '#F5F2EA',
  BACKGROUND_CARD: '#FDFDFD',
  SYSTEM_ERROR: '#FF7D7D',
  SYSTEM_POSITIVE: '#5EFF8B',
  SUB_GREEN: '#9BDA93',
  SUB_YELLOW: '#EEE170',
  SUB_RED: '#F3A199',
  BLACK: '#000000',
  WHITE: '#ffffff',
}

const style = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
