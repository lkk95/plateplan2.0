import StyledHeader from './Header.styled.js';
import {Navbar} from '../Navbar/Navbar.js';
import {Button} from '../Button/Button.js';

function Header (){
    return (
        <StyledHeader>
            <p>Home</p>
            <p>Placeholder Image</p>
            <Navbar/> 
            <Button/>      
        </StyledHeader>
    )
}

export {Header}