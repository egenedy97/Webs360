import React, { useState } from 'react';
import { CatButton, SearchDiv, InputField,ThisSlider, IconSpan, GalleryMainBox } from './Style'
import { BsChevronDown } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from '../../actions/sagaActions';
import { useEffect } from 'react';
import CategoryBox from './CategoryBox';

const CategoryPage = () => {
    const [showslider, showingSlider] = useState(false);
    const dispatch = useDispatch();

    // const [current, setPage] = useState(1) ;
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
      };
    
      const _handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            dispatch({type:sagaActions.SEARCH_CATEGORY , payload : {data:value}})
        }
      }
    const showHide = () => {
        showingSlider(!showslider)
    }

    useEffect(() => {
        dispatch({ type: sagaActions.FETCH_INIT_CATEGORY  })
    }, [dispatch]);
    const categoryData = useSelector(state => state.categorys);

    return (
        <>
            <SearchDiv>
                <CatButton onClick={showHide}>
                    Find Category Here
                    <IconSpan>
                        <BsChevronDown size={15} />
                    </IconSpan>

                </CatButton>
                <InputField placeholder="Search" value={value} onChange={onChange} onKeyDown={_handleKeyDown}/>
            </SearchDiv>
            {showslider && (<ThisSlider>
                
            </ThisSlider>)}
            <GalleryMainBox>
                {categoryData.categorys.map((element)=>{
                    return (<CategoryBox id={element.id} name ={element.name} Background={element.Background} img={element.img} Descriptor={element.Description}/>
                   )
                })}            
            </GalleryMainBox>
        </>
    )
}

export default CategoryPage;
