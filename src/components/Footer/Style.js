import Styled from 'styled-components'
import { color } from '../../media/style';
import { device } from '../../media/style';

export const StyledFooter = Styled.div`
    background-color :${color.black} ; 
    font-family:lato, sans-serif ; 
    width :100% ; 
    line-height:20px ; 
    color:white ; 
    items-align :center; 
    padding-right : 10%;
    
`

export const MainFooter = Styled.div`
background-color: ${color.black};
width:100%

@media ${device.tablet}
{
    display:grid; 
grid-template-columns: repeat(auto-fit, minmax(33.3%, 1fr));
grid-template-rows: repeat(auto-fit, minmax(80px, 1fr)); 
justify-content: space-between ; 
}

@media ${device.mobileL}
{
    display:grid; 
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-template-rows: repeat(auto-fit, minmax(80px, 1fr)); 
justify-content: space-between ; 
}

`

export const LeftText = Styled.div`
    
    color :${color.white};
    display: flex ; 
    flex-direction :column; 
    padding-left : 5% ;
    
`

export const LogoFooter = Styled.h1`
        font-family:lato, sans-serif ; 
    font-size : 20px ;  
  
`

export const IconSpan = Styled.span`
    margin-right :1% ;
`

export const TextCenter = Styled.div`
display: flex ; 

    font-size:10px ; 
    font-weight: 100 ; 
    color:${color.white} ; 
    margin:auto ; 
    text-align : center ; 
    font-family:lato, sans-serif ; 
    vertical-align:bottom;


`


export const RightText = Styled.div`
text-decoration:none ;
text-align: right;
vertical-align:bottom;


`




export const icons = {
    color: color.white
}

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