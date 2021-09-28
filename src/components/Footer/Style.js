import Styled from 'styled-components'
import { color } from '../../media/style'
// import { device } from '../../media/style'
export const StyledFooter = Styled.div`
    background-color :${color.black} ; 
    display : table; 
    font-family:lato, sans-serif ; 
    width :100% ; 
    line-height:20px ; 
    padding : 10px 100px 10px 15px ; 
    color:white ; 
    justify-content:space-between;
    flex-direction:row; 
    
`

export const MainFooter = Styled.div`
background-color: ${color.black};
width: 100%;
display:table-row; 


`

export const LeftText = Styled.div`
    display : inline-block 
    color :${color.white};
    width : 33% ;
    display:table-cell; 
    text-align:justify ;
    

`

export const LogoFooter = Styled.h1`
    font-weight : 500px ;
    font-family:lato, sans-serif ; 
    font-size : 20px ;    
    color:inherit ; 
`

export const IconSpan = Styled.span`
    margin-right :1% ;
`

export const icons = {
    color: color.white
}

export const TextCenter = Styled.div`
    display: inline-block ; 
    width:33% ; 
    font-size:10px ; 
    font-weight: 100 ; 
    color:${color.white} ; 
    position:relative ; 
    margin:auto ; 
    text-align : center ; 
    font-family:lato, sans-serif ; 
    display:table-cell; 
    vertical-align:bottom;
`

export const RightText = Styled.div`
display: inline-block ; 
width:33% ; 
position:relative ; 
display:table-cell;
text-decoration:none ;
vertical-align:bottom;
`

export const StyleFont = Styled.li`
    color:${color.white};
    text-align: right;
    text-decoration:none ;
    margin-top:0px ; 
    flex-direction:column ;
    font-size:10px ; 
    font-weight: 100 ;
    align-self: flex-end;
`
export const StrongFont = Styled.strong`
    color:${color.lightBlue} ; 
`

export const UList = Styled.ul`
    list-style:none ; 
    flex-direction:column ;
    marign-bottom :0px;


`