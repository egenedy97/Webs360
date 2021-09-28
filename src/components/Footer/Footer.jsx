import React from "react";
import { StyledFooter, MainFooter, LeftText, LogoFooter, IconSpan, icons, TextCenter ,UList, RightText , StyleFont ,StrongFont } from './Style'
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
            <StyledFooter>
                <MainFooter>
                    <LeftText>
                        <LogoFooter>
                            Weds360
                        </LogoFooter>
                        <div>
                            <IconSpan>

                                <Link to="https://www.facebook.com/Weds360/">
                                    <FaFacebookF style={icons} />
                                </Link>
                            </IconSpan>
                            <IconSpan>

                                <Link to="https://www.instagram.com/weds360/">
                                    <FaInstagram style={icons} />
                                </Link>

                            </IconSpan>
                        </div>
                    </LeftText>
                    <TextCenter>
                        © Copyright
                        <Link to="http://plus360.xyz/" style={{textDecoration:"none"}}>
                            <StrongFont >
                            &nbsp;  Plus360 &nbsp;
                            </StrongFont>
                             </Link>
                        All Rights Reserved

                    </TextCenter>
                    <RightText>
                        <UList>
                        <Link to="https://weds360.com/pages/terms-conditions?locale=en" style={{textDecoration:"none"}} >
                        <StyleFont>
                        Terms & Conditions
                        </StyleFont>
                        </Link>
                        <Link to = "https://weds360.com/pages/privacy-policy?locale=en" style={{textDecoration:"none"}}>
                            <StyleFont>
                            Privacy Policy
                            </StyleFont>
                        </Link>
                        </UList>
                    </RightText>

                </MainFooter>
            </StyledFooter>
    )
}

export default Footer; 
