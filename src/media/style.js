import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '650px',
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
margin :50px 10% ;

`

