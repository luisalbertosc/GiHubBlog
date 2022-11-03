import { HeaderContainer } from "./styles";
import logoSvg from '../../assets/logoGitHub.svg'
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={logoSvg} alt="" />
            </NavLink>
        </HeaderContainer>
    )
}