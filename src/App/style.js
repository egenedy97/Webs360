import styled from "styled-components";
import { device } from '../media/style'



export const Header = styled.div`
    width:100%  ; 
    height :50px ; 
    background-color :green;
    justify-content : center; 
    display: flex;

`

export const Container = styled.div`

@media ${device.mobileS}
{
    width:750px ;
    background-color:blue  ; 

}
@media ${device.mobileM}
{
    width:750px ;
    background-color:blue  ; 

}
@media ${device.mobileL}
{
    width:750px ;
    background-color:blue  ; 

}

@media ${device.tablet}
{
    width:970px ;
    background-color:green ; 

}


@media ${device.laptop}{
    width:1170px ;
    background-color:red ; 

}

@media ${device.laptopL}{
    width:1170px ;
    background-color:red ; 

}

padding :0px 15px 0px 15px ; 
justify-content : center; 


`