import React ,{useEffect} from 'react'
import { Photo, Grid, Text, Image, RelatedPhoto, Description ,GalleryGrid ,ImageGallery , ImageSelf , DiscriptionGallery, Icons} from './style';
import testPhoto from '../../images/testPhoto.png'
import { Link } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle } from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux';
import { sagaActions } from '../../actions/sagaActions';


const ImagePage = () => {
    const dispatch = useDispatch() ; 
    useEffect(()=>{
        dispatch({type:sagaActions.FETCH_ONE_IMAGE , payload:{id:1 , category_id:1}})
    });
    const images = useSelector(state=>state.images.images) ; 
    const relatedImages = useSelector(state=>state.images.relatedImage) ; 

    return (
        <>
            {images.map((element)=>{
                return (
                    <Grid key={element.id}>
                <Photo >
                    <Image src={element.url} />
                </Photo>
                <Text>
                    <RelatedPhoto>
                      {element.name}
                    </RelatedPhoto>
                    <Description>
                        Satisfy your guests with mouth-watering irresistible appetizers corner
                    </Description>

                    <Link to="#" style={{ textDecoration: 'none', color: '#337ab7' }}>
                        <Description>
                            Umai
                        </Description>
                    </Link>
                    <Icons>
                        <FaFacebook size={34} style={{marginRight : "8px"}}/>
                        <AiFillTwitterCircle size={38} />
                    </Icons>
                </Text>
            </Grid>
                )
            })}
            <RelatedPhoto>
                Related Images
            </RelatedPhoto>
            <GalleryGrid>
                    {relatedImages.map((element)=>{
                        return (<ImageGallery key={element.id}>
                            <ImageSelf alt ={element.name} src ={element.url}/>
                            <DiscriptionGallery>
                                {element.name}
                        </DiscriptionGallery>
                        </ImageGallery>)
                    })}
                    
                
                </GalleryGrid>
        </>
    )
}

export default ImagePage;


