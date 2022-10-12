import StyledNavbar from './Navbar.styled.js';
import StyledNavList from './NavList.styled.js';
import StyledNavLink from './NavLink.styled.js';

function Navbar (){
    return (
        <StyledNavbar>
           <StyledNavList>
            <StyledNavLink>Home</StyledNavLink>
            <StyledNavLink>Planner</StyledNavLink>
            <StyledNavLink>Shopping</StyledNavLink>
           </StyledNavList>
        </StyledNavbar>
    )
}

export {Navbar}