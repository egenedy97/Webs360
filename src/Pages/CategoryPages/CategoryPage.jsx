import React, { useState } from 'react';
import { CatButton, SearchDiv, InputField, IconSpan, GalleryMainBox, Box, Content, WhiteContent,ContentTODiv, IconDiv, AdressLink, TitleHover, Discription } from './Style'
import { BsChevronDown } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from '../../actions/sagaActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const CategoryPage = () => {
    const [showslider, showingSlider] = useState(false);
    const [hover, showHover] = useState(true);
    const showHovers = () => {
        showHover(!hover)
    }
    const showHide = () => {
        showingSlider(!showslider)
    }
    const dispatch = useDispatch();
    const cat = useSelector(state => state.categorys);

    useEffect(() => {
        dispatch({ type: sagaActions.FETCH_CATEGORY })
    }, [dispatch]);
    return (
        <>
            <SearchDiv>
                <CatButton onClick={showHide}>
                    Find Category Here
                    <IconSpan>
                        <BsChevronDown size={15} />
                    </IconSpan>

                </CatButton>
                <InputField placeholder="Search" />
            </SearchDiv>
            {showslider && (<div>this is show slider</div>)}
            <GalleryMainBox>


                <Box onMouseOver={showHovers} onMouseOut={showHovers} background="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/33/image/large-d1b0eea7ebd924b1ed0ff62d7875fecf.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T033115Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=486229246d9ee64e07e080a010d7e961b72343807bff239836cc466e68c652df">
                    {hover ? (
                        <Content>
                            <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/36/icon/big-fc756d930d52893f3482db32f95afb54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T045553Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=027b0c50220e39545cf25b4bcb83dffb8f870a9aaa6c7a170ff7981ffbc0ba5a" alt="..." />
                            <h3>
                                HairAddress
                            </h3>
                        </Content>) : (<Content>
                            <WhiteContent>
                                <IconDiv>
                                    <FaHome size={25} />
                                </IconDiv>
                                <ContentTODiv>
                                <TitleHover>HairAddress</TitleHover>
                                <Discription>
                                    From the smallest detail to the final touches.
                                </Discription>
                                <Link to='#' style={{textDecoration:'none'}}> 
                                <AdressLink>cut your hair</AdressLink>
                                </Link>
                                </ContentTODiv>
                                
                            </WhiteContent>
                        </Content>)}
                </Box>

                <Box onMouseOver={showHovers} onMouseOut={showHovers} background="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/33/image/large-d1b0eea7ebd924b1ed0ff62d7875fecf.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T033115Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=486229246d9ee64e07e080a010d7e961b72343807bff239836cc466e68c652df">
                    {hover ? (
                        <Content>
                            <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/36/icon/big-fc756d930d52893f3482db32f95afb54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T045553Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=027b0c50220e39545cf25b4bcb83dffb8f870a9aaa6c7a170ff7981ffbc0ba5a" alt="..." />
                            <h3>
                                HairAddress
                            </h3>
                        </Content>) : (<Content>
                            <WhiteContent>
                                <IconDiv>
                                    <FaHome size={25} />
                                </IconDiv>
                                <ContentTODiv>
                                <TitleHover>HairAddress</TitleHover>
                                <Discription>
                                    From the smallest detail to the final touches.
                                </Discription>
                                <Link to='#' style={{textDecoration:'none'}}> 
                                <AdressLink>cut your hair</AdressLink>
                                </Link>
                                </ContentTODiv>
                                
                            </WhiteContent>
                        </Content>)}
                </Box>


                <Box onMouseOver={showHovers} onMouseOut={showHovers} background="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/33/image/large-d1b0eea7ebd924b1ed0ff62d7875fecf.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T033115Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=486229246d9ee64e07e080a010d7e961b72343807bff239836cc466e68c652df">
                    {hover ? (
                        <Content>
                            <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/36/icon/big-fc756d930d52893f3482db32f95afb54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20211001%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211001T045553Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=027b0c50220e39545cf25b4bcb83dffb8f870a9aaa6c7a170ff7981ffbc0ba5a" alt="..." />
                            <h3>
                                HairAddress
                            </h3>
                        </Content>) : (<Content>
                            <WhiteContent>
                                <IconDiv>
                                    <FaHome size={25} />
                                </IconDiv>
                                <ContentTODiv>
                                <TitleHover>HairAddress</TitleHover>
                                <Discription>
                                    From the smallest detail to the final touches.
                                </Discription>
                                <Link to='#' style={{textDecoration:'none'}}> 
                                <AdressLink>cut your hair</AdressLink>
                                </Link>
                                </ContentTODiv>
                                
                            </WhiteContent>
                        </Content>)}
                </Box>
            </GalleryMainBox>
        </>
    )
}

export default CategoryPage;