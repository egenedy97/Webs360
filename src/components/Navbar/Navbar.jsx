import React from "react";
import { Nav,Container, FirstDiv,SecondDiv ,IncoDiv, ThirdDiv,LogoImage,List,ListItem,ListLink,LangDiv ,LangDivItems, DropDownMenu, DropDownLink } from './Style'
import Logo from '../../images/logo.png'
import {IoMdPersonAdd} from 'react-icons/io'
import { useState } from "react";

const Navbar =  () => {
    const [showNav , DropDown] = useState(false) ;
    const DropDownMe = ()=>{
        DropDown(!showNav) ;
    }
    return (
        <Nav>
            <Container>
                <FirstDiv>
                    <LangDiv>
                    <IncoDiv>
                            <IoMdPersonAdd  size={20}/>
                        </IncoDiv>
                        <LangDivItems>
                            العربيه 
                        </LangDivItems>
                       
                    </LangDiv>
                    <List>
                        <ListItem>
                            <ListLink to="/#" onMouseOver= {()=>{
                                DropDownMe() ;
                            }} onMouseOut ={()=>{
                                DropDownMe() ;
                            }}>
                            360 Planner
                            </ListLink >
                            <DropDownMenu>
                                <DropDownLink>
                                    Designers
                                </DropDownLink>
                                <DropDownLink>
                                    Designers
                                </DropDownLink>
                                <DropDownLink>
                                    Designers
                                </DropDownLink>
                                <DropDownLink>
                                    Designers
                                </DropDownLink>
                            </DropDownMenu>

                        </ListItem>
                        <ListItem>
                            <ListLink to="/#">
                            HER
                            </ListLink >
                        </ListItem>
                        <ListItem>
                            <ListLink to="/#">
                            HER
                            </ListLink >
                        </ListItem>
                        <ListItem>
                            <ListLink to="/#">
                            The WEDDING
                            </ListLink >
                        </ListItem>
                    </List>
                </FirstDiv>
                <SecondDiv>
                    <LogoImage src={Logo} />
                </SecondDiv>
                <ThirdDiv>
                <List>
                    <ListItem>
                            <ListLink to="/#">
                            Vendoer
                            </ListLink >
                        </ListItem>
                        <ListItem>
                            <ListLink to="/#">
                                Gallery
                            </ListLink >
                        </ListItem>
                        <ListItem>
                            <ListLink to="/#">
                            IDEAS & MORE
                            </ListLink >
                        </ListItem>
                        </List>
                </ThirdDiv>
            </Container>
        </Nav>
    )
}

export default Navbar; 
