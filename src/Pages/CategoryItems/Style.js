import styled from "styled-components";
import { color, device } from "../../media/style";


export const Grid = styled.div`
    width: 100% ; 
    display :grid ;   
    gap: 0% 10% ;

`

export const Search = styled.div`
    @media ${device.tablet}
    {
        grid-column-start: 1 ;
        grid-column-end : 2 ; 
        width: 85%;

    }
    @media ${device.mobileS}
    {
        width :100% ; 
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

export const SearchBar = styled.input`
border: solid 1px #000;
width : 100% ; 
height: 32px ; 
font-family : lato, sans-serif ; 
font-size:14px ; 
margin : 10px 0px ; 
`

export const ButtonBar = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
margin-bottom: 10px;
`

export const CancelButton = styled.a`
    background-color: ${color.white};
    color: #000;
    border: solid 1px #000;
    padding-right: 10px;
    padding-left: 10px;
    padding-top : 4px ; 
    height: 21px;
    font-family : lato, sans-serif ; 
    font-size: 12px;
    
    

`

export const ApplyButton = styled.button`
vertical-align: middle;
    margin : 0px 5px ;
    border: solid 1px #000;
    height: 21px;
    margin-left: 3px;
    font-size: 12px;
    text-align: center;
    background-color: #000;
    color: #fff;
    font-family : lato, sans-serif ; 
    padding : 0px 10px ; 

`

export const Paginate = styled.div`
    width : 100%;
    align-items : center ; 
    justify-content:center ;
    display:flex;  
`

