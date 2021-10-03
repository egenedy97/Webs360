import styled from "styled-components";
import { device } from "../../media/style";

export const Grid = styled.div`
    display:grid ; 
    width:100; 
    grid-column-gap: 2%;
    grid-row-gap : 5% ; 
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) ; 
    margin-top:300px ; 

    
    `

export const Photo = styled.div`

grid-column-start :1 ; 
grid-column-end : 3 ; 
height:auto ; 
display: inline-block;
`
export const Image= styled.img`
    width:100%; 
`
export const Text = styled.div`
 @media (min-width : 625px) {
  width:100%;
}  
`
export const Description = styled.h5`
font-family:lato, sans-serif; 
font-weight:normal;
@media ${device.tablet} {
   font-size:18px ; 
 }
 @media ${device.laptop} {
    font-size:23.6px; 
  }
`

export const Icons = styled.div`
  width:100% ; 
  display:flex ; 
  flex-direction :row ; 
  @media(max-width: 990px)
  {
    justify-content : center ; 
  }
  margin:15% 0%; 
`



export const RelatedPhoto = styled.h2`
font-size: 35.1px;
line-height: .92;
font-weight: 700;
color: #000;
margin-bottom: 35px;
font-family:lato, sans-serif; 
@media ${device.tablet} {
    font-size:23.6px ; 
  }
  @media ${device.laptop} {
     font-size: 35.1px;
   }
`
export const GalleryGrid = styled.div`
@media ${device.mobileS}
{
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
}
    @media ${device.tablet}
    {
        grid-column-start: 2 ;
        grid-column-end : 4 ; 
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    }
   
    
    @media ${device.laptop}{
        grid-column-start: 2 ;
        grid-column-end : 6 ; 
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
    display:grid ; 
    justify-content: flex-end ;


`

export const ImageGallery = styled.div`
  
    width : 100%; 
    display:flex; 
    flex-direction :column ; 
`
export const ImageSelf = styled.img`
    width: 90% ; 
    max-height : 230px ;
    display:inline-block ; 

`
export const DiscriptionGallery = styled.h3`
    font-size : 17px ; 
    color:black ;
    line-height: 25px;
    font-family : lato, sans-serif ; 
    font-weight : 700 ;
`

