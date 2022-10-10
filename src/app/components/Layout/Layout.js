import {Header} from './Header.js';
import {Footer} from './Footer.js';
import StyledLayout from './Layout.styled.js';
import StyledMain from './Main.styled.js';


function Layout ({children}){
    return (
        <StyledLayout>
        <Header/>
        <StyledMain>{children}</StyledMain>
        <Footer/>
        </StyledLayout>
    )
}

export {Layout }