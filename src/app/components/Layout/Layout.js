import {Header} from './Header.js';
import {Footer} from './Footer.js';
import StyledLayout from './Layout.styled.js';


function Layout ({children}){
    return (
        <StyledLayout>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </StyledLayout>
    )
}

export {Layout }