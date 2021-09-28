import Styled from "styled-components";
import { device } from "../../media/style";

export const TitleText = Styled.div`
    text-align : center ; 
`

export const Header = Styled.div`
width:100%  ; 
justify-content : center; 
display: flex;
padding : 100px 0px 100px 0px ;

`

export const TitleTools = Styled.div`
    max-width :90% ; 
    display : block ; 
    margin :0% 5% 100px 5% ; 
    font-family : lato, sans-serif ;
     

`

export const ToolTextParagraph = Styled.h3`
    margin : 0 auto ; 
    line-height : 1.25 ; 
    text-transform : uppercase ; 
    font-weight : 900 ; 
    text-align:center ;
    @media ${device.mobileL}
{
    font-size: 19px ; 
   
}
@media ${device.tablet}
{
    font-size: 24px ; 
   
}
`
