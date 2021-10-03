import React ,{useState} from 'react' ;
import { Box, Content, WhiteContent,ContentTODiv, IconDiv, AdressLink, TitleHover, Discription} from './Style'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const CategoryBox = ({id , Background , name , img ,Descriptor })=>{
    const [hover, showHover] = useState(true);
 
    const showHovers = () => {
        showHover(!hover)
    }
    return (
        <Box key={id} onMouseOver={showHovers} onMouseOut={showHovers} background={Background}>
                    {hover ? (
                        <Content>
                            <img src={img} alt="..." />
                            <h3>
                                {name}
                            </h3>
                        </Content>) : (<Content>
                            <WhiteContent>
                                <IconDiv>
                                    <FaHome size={25} />
                                </IconDiv>
                                <ContentTODiv>
                                <TitleHover>{name}</TitleHover>
                                <Discription>
                                   {Descriptor}
                                </Discription>
                                <Link to='#' style={{textDecoration:'none'}}> 
                                <AdressLink>cut your hair</AdressLink>
                                </Link>
                                </ContentTODiv>
                                
                            </WhiteContent>
                        </Content>)}
                </Box>    
    )
}

export default CategoryBox ; 