import React from 'react'
import { Container } from '../../media/style';
import { Header, TitleTools, ToolTextParagraph } from './Style';
import ToolList from './ToolsList/ToolList';

const Tools = () => {
    return (
        <Header>
            <Container>
                <TitleTools>
                    <ToolTextParagraph>
                        <b>
                            Wedding Planning is a piece of cake with Weds360. We know what matters most and you can count on us every step of the way.
                        </b>
                    </ToolTextParagraph>
                </TitleTools>
                <ToolList />
            </Container>
        </Header>
    )
}

export default Tools; 