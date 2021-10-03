import styled from 'styled-components' ;
import { color, device } from '../../media/style' ; 
import { Link } from 'react-router-dom';
export const Nav = styled.div`
    width:100% ; 

`

export const Container = styled.div`
    margin :0% 9% ;
    display : grid ;
    grid-template-columns: 43fr 10fr  43fr ;
    grid-column-gap: 1.5% ; 
    padding-top:30px ; 
`

export const FirstDiv = styled.div`
    grid-row-start : 2 ; 
    grid-row-end : 3;
    border-top : 1px  solid black ; 
    border-bottom : 1px  solid black ; 
    display: grid; 
    grid-template-columns : 1fr  ; 
    justify-content: space-between ;
    align-items: center;
    min-height: 40px;
    
`

export const LangDiv = styled.ul`
    width : 25% ; 
    margin-top:-10% ; 
    max-height : 30px ; 
    list-style : none;
    display : flex;  
`
export const LangDivItems = styled.div`
    border-right : 1px solid black ; 
    border-left : 1px solid black ; 
    color:#024d4c;
    font-size: 15px;
    font-weight: 700;
    padding-left :  5px ; 
    padding-right :  5px ; 
    padding-top:4px ;
    align-items : center ; 
`
export const IncoDiv = styled.div`

color:#024d4c;
font-size: 15px;
font-weight: 700;    padding : 0px 5px ; 

`

export const List = styled.ul`
width: 100%;
height: 100%;
display: flex;
list-style-type: none;
justify-content: space-between;
align-items: center;

`
export const ListItem = styled.li`
    text-align:center ; 
    position: relative ; 

    padding :0 ; 
`

export const ListLink = styled(Link)`
text-transform: uppercase;
font-family: lato,sans-serif;
@media ${device.tablet}{
    font-size:10px ; 
}
@media ${device.laptop}{
    font-size: 13.4px;
}
font-weight: 900;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-decoration: none;
color:${color.black};
`
export const DropDownMenu = styled.div`
display: none;
width : 100% ; 
top: 44px;
left: 0;
z-index: 9999;
position: absolute;
`
export const DropDownLink = styled(Link)`
    color: black ; 
    border-top : 1px solid black ; 
`
export const SecondDiv = styled.div`
    grid-row-start : 1 ; 
    grid-row-end : 3;


`
export const LogoImage = styled.img`
    width:100% ; 
    height:100%;
`
export const ThirdDiv = styled.div`

grid-row-start : 2 ; 
grid-row-end : 3;
border-top : 1px  solid black ; 
border-bottom : 1px  solid black ; 
min-height: 40px;
align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const IconLang = styled.div`

`