import { Poster } from "ui/components/Poster";
import moviesCover from "assets/avengers endgame.jpg";
import seriesCover from "assets/game of thrones.jpg";
import moviesIcon from "assets/movies icon.svg";
import seriesIcon from "assets/series icon.svg";

import "./Home.scss";

export function Home(): JSX.Element {
    return (
        <div className="home" data-testid="home-div">
            <Poster to="/movies" img={moviesCover} imgAlt="movies poster" icon={moviesIcon} iconAlt="movies icon" >Movies</Poster>
            <Poster to="/series" img={seriesCover} imgAlt="series poster" icon={seriesIcon} iconAlt="series icon" >Series</Poster>
        </div>
    )
}
