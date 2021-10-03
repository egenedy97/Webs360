import styled from "styled-components";
import { color, device } from "../../media/style";
// import { device } from "../../media/style";
import Slider from "react-slick";

export const ThisSlider = styled(Slider)`
    background-color :white  ; 
    
    max-height : 140px ; 
    `


export const SliderDiv = styled.div`
   
`
export const SearchDiv = styled.div`
    justify-content : align-center ; 
    width:100% ; 
    display:grid ; 
    grid-gap : 0px 5%  ; 
    grid-template-columns: 1fr 1fr; 
    padding:0% 1% ; 
    


`

export const CatButton = styled.button`
border: solid 2px #000;
background-color:white ; 
color:${color.lightBlack} ; 
width: 100%;
height: 43px;
justify-content: center;
cursor: pointer; 
font-weight: bold;
text-transform: uppercase;
font-family: lato,sans-serif;

@media ${device.tablet}{
    letter-spacing: 4.1px;
    font-size : 18px ; 
}

@media ${device.mobileL && device.mobileS && device.mobileM}{
    font-size : 14px ; 
}
`

export const InputField = styled.input`
border: solid 2px #000;
width: 100% ; 
text-align : center ; 
height: 43px;
background-color:white ; 
font-size: 100%;
font-weight: bold;
letter-spacing: 4.1px;
text-transform: uppercase;
font-family: lato,sans-serif;
align-item:center ;
justify-content: center;
color : ${color.lightBlack} ; 
display : inline-block;

@media ${device.tablet}
{
    font-size:18px ; 
    ::placeholder {
      color: Black;
      opacity: 1; /* Firefox */
      font-size :18px ; 

    }
    
    :-ms-input-placeholder { 
     color: Black;
     font-size : 18px;
    }
    
    ::-ms-input-placeholder { 
     color: Black;
     font-size :18px ; 
    }
}
@media ${device.mobileL && device.mobileS}
{
    font-size:14px ; 
    ::placeholder {
      color: Black;
      opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { 
     color: Black;
     font-size : 14px;
    }
    
    ::-ms-input-placeholder { 
     color: Black;
     font-size :14px ; 
    }
}
`

export const IconSpan = styled.span`
    padding:0px 2px ; 
`

export const GalleryMainBox = styled.div`
    width:100%  ;
    margin-top : 12px ; 
    display:grid ; 
    grid-gap :10px 10px  ; 
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) ; 
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); 
  

`

export const Box = styled.div`
    background : ${props => `url(${props.background}) no-repeat `} ; 
    background-size : cover ; 
    background-position: center ; 
    justify-content:center ; 
    item-align : center ;
    margin:0% 5% ;

    @media ${device.mobileL}{
        height:200px ; 

    }
    @media ${device.tablet}{
        height:230px ; 
        max-width:350px ; 

    }
`
export const Content = styled.div`
    top: 0;
    z-index: 9998;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.25);
    color : white ; 
    font-family: lato,sans-serif;
    :hover{
        padding : 5% 5% ; 
    }
`
export const WhiteContent = styled.div`
    background-color : white ; 
    width:90%;
    height:90%;
    align-content:space-between; 
    justify-content:center; 
    

`

export const IconDiv = styled.div`
    background-color:black ;
    width : 10%; 
    margin : 0% 45% ; 
    justify-content : center ;
    align-items: center ; 
    padding :1px  ; 
    height: 18% ; 
    display:flex; 
    
`

export const ContentTODiv = styled.div`
    width:100% ; 
    text-align:center ; 
    height:70% ; 
    padding-top:15%;
    
`
export const TitleHover = styled.h2`
    color : #000;
    font-family: lato,sans-serif,
    font-size: 21px;
    font-weight: 900;

    line-height: 5px;
`
export const Discription = styled.span`
font-size: 11px;
line-height: 1.36;
letter-spacing: .4px;
color:${color.black} ; 
`

export const AdressLink = styled.p`
    color:${color.lightGreen} ; 
    font-size: 11px;
    line-height: 1.36;
    letter-spacing: .4px;
`