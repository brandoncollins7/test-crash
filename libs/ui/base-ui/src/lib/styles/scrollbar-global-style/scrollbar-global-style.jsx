import {createGlobalStyle} from 'styled-components'

export const ScrollbarGlobalStyle = createGlobalStyle`
  /* Customize website's scrollbar like Mac OS Not supports in Firefox and IE */
  /* total width */
  ::-webkit-scrollbar {
      background-color: transparent;
      width: 0.5rem;
  }
  
  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  
  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
      background-color: rgba(137, 137, 151, 0.5);
      border-radius: 0.5rem;
  }
  
  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
      display:none;
  }
`
