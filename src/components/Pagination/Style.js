import styled from "styled-components";
import Styled from "styled-components";
import { color } from "../../media/style";

export const PaginationContainer = Styled.ul`
    display : flex ; 
    list-style: none ; 
   
`

export const PaginationItem = Styled.li`
${PaginationContainer};
    padding: 0 12px;
    height: 32px;
    text-align: center;
    color: ${color.green};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    border : 1px solid #eee ; 

    :hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
      }
  
     ${props=>props.selected && `
      background-color :${color.green} ; 
      color:white ; 
     `}

     ${props=>props.disabled && `
     pointer-events: none;

     `}
      
`
export const DotsDiv = styled.div`

&:hover {
  background-color:transparent ;
  color :  ${color.green}; 
  cursor: default;
}
  `
export const Arrow = styled.div`
padding: 0 12px;

height: 32px;
text-align: center;
margin: auto 4px;
color: ${color.green};
display: flex;
box-sizing: border-box;
align-items: center;
letter-spacing: 0.01071em;
line-height: 1.43;
font-size: 13px;
min-width: 32px;
font-family: lato,sans-serif;
justify-content : space-between ; 
:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

 ${props=>props.selected && `
  background-color :${color.green} ; 
  color:white ; 
 `}

 ${props=>props.disabled && `
 pointer-events: none;

 `}
 &:before {
  position: relative;
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border-right: 0.12em solid rgba(0, 0, 0, 0.87);
  border-top: 0.12em solid rgba(0, 0, 0, 0.87);
}
  `

