import StyledHeader from './Header.styled.js';
import {Navbar} from '../Navbar/Navbar.js';

function Header (){
    return (
        <StyledHeader>
            <p>Home</p>
            <p>Placeholder Image</p>
            <Navbar/>       
        </StyledHeader>
    )
}

export {Header}