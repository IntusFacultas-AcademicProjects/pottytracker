import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
    padding: .25em 1em;
    display: flex;
    align-items: center;
    
`;
export const NavbarItemList = styled.ul`
    list-style: none;
    display: flex;
    
    padding-left: 0;
    margin-bottom: 0;
`;
export const NavbarItem = styled.li`
    padding: .25em 1em;
`;
export const NavbarBrand = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: palevioletred;
    font-size: 24px;
    .navbar__brand__icon {
        height: 30px;
        margin-right: .25em;
        & path  {
            fill: palevioletred
        }
    }
    &:hover {
        color: palevioletred;
        text-decoration: none;
    }
    &:visited {
        color: palevioletred;
    }
`;
export default Navbar;
