import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../actions/sagaActions';
import Pagination from '../../components/Pagination/Pagination'
import {  useParams } from 'react-router-dom';
import { Grid, Search, Paginate, CancelButton, ButtonBar, ApplyButton, SearchBar, GalleryGrid, ImageGallery, ImageSelf, DiscriptionGallery } from './Style';
const CategoryItems = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch() ; 
    const [value , setValue] = useState('') ; 
    const onChange = (event) => {
        setValue(event.target.value);
      };
    const onSubmit = ()=>{
        dispatch({type:sagaActions.SEARCH_IMAGES , payload :{data : value}})
    }
    
    const onCancel = ()=>{
        setValue('') ;
    }
    useEffect(() => {
        const {category_id} = useParams ; 
        dispatch({type:sagaActions.FETCH_IMAGES_PAGE , payload :{page : 1 , category_id:1}});
    }, [dispatch])

    const myData = useSelector(state=>state.images.images) ; 

    return (
        <>
            <Grid>
                <Search>
                    <ButtonBar>

                        <CancelButton onClick={onCancel}>
                            Clear
                        </CancelButton>
                        <ApplyButton onClick={onSubmit}>
                            Apply
                        </ApplyButton>
                    </ButtonBar>
                    <SearchBar placeholder="Search" onChange = {onChange}  />

                </Search>
                <GalleryGrid>
                   {myData.map((element)=>{
                       return(
                        <ImageGallery>
                        <ImageSelf alt={element.name} src={element.url} />
                        <DiscriptionGallery>
                           {element.name}
                        </DiscriptionGallery>
                    </ImageGallery>
                       )
                   })}

                </GalleryGrid>
            </Grid>
            <Paginate>
                <Pagination

                    currentPage={1}
                    totalCount={352}
                    pageSize={8}
                    onPageChange={page => setCurrentPage(page)}
                />
            </Paginate>


        </>
    )
}

export default CategoryItems; 