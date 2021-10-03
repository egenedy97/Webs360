import React from 'react'
import {Container} from '../media/style'
import { Header } from './style'
import Footer from '../components/Footer/Footer';
import Tools from '../components/Tools/Tool';
import CategoryItems from '../Pages/CategoryItems/CategoryItems';
import CategoryPage from '../Pages/CategoryPages/CategoryPage';
import ImagePage from '../Pages/ImagePage/ImagePage';
import { Route, Switch } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
const App= ()=> {
 
  return (
    <>
     <Header>
       <Navbar/>
        <Container>
          <Switch>
            <Route exact path='/category' component={CategoryPage}/>
            <Route  path='/category/:category_id' component={CategoryItems}/>
            <Route path='/photos/asdfas' component={ImagePage} />
          </Switch>
        </Container>
     </Header>
     <Tools></Tools>
     <Footer>
       
     </Footer>
    </>
  );
}
export default App;
