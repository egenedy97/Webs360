import React from "react";
import { Cell , Container2 ,TextDiv , ImageDiv , ImageDevelope , HeadTextTool , ContentTool , LinkP } from "./Style";
import  Budgeter from '../../../images/footer/budgeter.png' 
import  CheckList from '../../../images/footer/CheckList.png' 
import  Guestlist from '../../../images/footer/guestlist.png' 
import  Vendors from '../../../images/footer/vendors.png' 
import  Registry from '../../../images/footer/registry.png' 
import  Website from '../../../images/footer/website.png' 
import { Link } from "react-router-dom";

const list =[ {
    id:1,
    title:'Wedding Website' , 
    text :'Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you. ' , 
    imageUrl : Website , 
    url : 'Create your website'
} ,
{
    id:2,
    title:'budgeter' , 
    text :'Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of. ' , 
    imageUrl : Budgeter , 
    url : 'Create and manage your budget'
} ,
{
    id:3,
    title:'check list' , 
    text :'Set your tasks, create your priority list and never forget any wedding detail. ' , 
    imageUrl : CheckList , 
    url:'Get your check list'
} ,
{
    id:4,
    title:'guest list' , 
    text :'Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips. ' , 
    imageUrl : Guestlist , 
    url:'Create your guest list'
} ,
{
    id:5,
    title:'vendors' , 
    text :'Meet your service providers, view their profiles and make all the perfect choice for your wedding night. ' , 
    imageUrl : Vendors , 
    url:'Start your tour'
} ,
{
    id:6 , 
    title:'Registry List' , 
    text :'Escape the awkward moments and receiving the same gift twice by listing everything you\'ve thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.' , 
    imageUrl : Registry , 
    url:'Create your dream list'
} 

]
const ToolList = ()=>{
    return (
        <Container2>
            {
                list.map((element)=>{
                   return (<Cell key={element.id}>
                    <ImageDiv>
                      <ImageDevelope src={element.imageUrl}/>
                    </ImageDiv>
                    <TextDiv>
                        <HeadTextTool>
                            <b>
                            {element.title}
                            </b>
                        </HeadTextTool>
                        <ContentTool>
                           {element.text}
                        </ContentTool>
                        <Link to ='/#' style={{textDecoration:"none" } }>
                            <LinkP>
                                {element.url}
                            </LinkP>
                        </Link>
                    </TextDiv>
                </Cell>) 
                })
            }
        </Container2>
    )
}

export default ToolList ; 