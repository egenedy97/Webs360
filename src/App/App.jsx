import React from 'react'
import { Header } from './style'
import { Container } from '../media/style';
import Footer from '../components/Footer/Footer';
import Tools from '../components/Tools/Tool';
function App() {
  return (
    <>
      <Header>
        <Container>
          <p> this is my header man </p>
        </Container>
      </Header>
      <Tools />
      <Footer />
    </>
  );
}

export default App;
