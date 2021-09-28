import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };


  export const color = {
    green:'#024d4c' , 
    white :'#FFF' , 
    lightGreen:'#008174' , 
    black :'#000000',
    lightBlue:'#337ab7',
    lightBlack:'#333333'
  }
  
  
export const Container = styled.div`

@media ${device.mobileS}
{
    width:750px ;
   

}
@media ${device.mobileM}
{
    width:750px ;
   

}
@media ${device.mobileL}
{
    width:750px ;
   
}

@media ${device.tablet}
{
    width:970px ;
    

}


@media ${device.laptop}{
    width:1170px ;
     

}

@media ${device.laptopL}{
    width:1170px ;
    

}

padding :0px 15px 0px 15px ; 
justify-content : center; 

`

