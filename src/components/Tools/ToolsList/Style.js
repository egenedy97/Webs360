import Styled from "styled-components";
import { color } from "../../../media/style";
import { device } from "../../../media/style";

export const Container2 = Styled.div`   
    margin :0% 5% 0px 5% ; 
    display: grid;  
    justify-content: space-between ; 
   
    gap: 20px 10px;
    flex-direction: row ;
    @media ${device.mobileL}
{
    font-size:16px; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); 
   
}
@media ${device.tablet}
{
    font-size:18px; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); 
   
}
`


export const Cell = Styled.div`
    display: flex ; 
    flex-direction : row  ; 
    align-items: stretch;
`


export const ImageDiv = Styled.div`
    margin:0% 2% 0% 2% ; 
    width:20%;
    vertical-align: middle ;
    
`

export const ImageDevelope = Styled.img`
    width: 90%;
    display: block;
`

export const TextDiv = Styled.div`
    margin:0% 2% 0% 2% ; 
    width:70%;
    flex:1;

`

export const HeadTextTool = Styled.h4`
text-transform : uppercase ; 
font-family : lato, sans-serif ;
color:${color.lightBlack} ; 
@media ${device.mobileL}
{
    font-size:16px; 
   
}
@media ${device.tablet}
{
    font-size:18px; 
   
}
`

export const ContentTool = Styled.p`
font-weight: 400px;
font-size: 12px;
line-height: 15pt;
letter-spacing: .5px;
text-align: left;
color:${color.lightBlack} ; 
font-family : lato, sans-serif ;
`


export const LinkP = Styled.p`
 color:${color.green} ;
 font-family : lato, sans-serif ;
 font-size: 12px;
 `