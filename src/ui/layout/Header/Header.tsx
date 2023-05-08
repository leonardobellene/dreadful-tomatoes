import { CustomNavLink } from "ui/components/CustomNavLink";
import { Link } from "react-router-dom";
import moviesIcon from "assets/movies icon.svg";
import seriesIcon from "assets/series icon.svg";
import logoIcon from "assets/deadful tomatoes.svg";

import "./Header.scss";

export function Header(): JSX.Element {
    return (
        <header className="header" data-testid="header-div">
            <Link to="/" className="dreadful-tomatoes-logo"><img width={185.5} src={logoIcon} alt="Dreadful Tomatoes logo" /></Link>
            <CustomNavLink to="/movies" icon={moviesIcon} alt="movies icon" >Movies</CustomNavLink>
            <CustomNavLink to="/series" icon={seriesIcon} alt="series icon" >Series</CustomNavLink>
        </header>
    )
}
