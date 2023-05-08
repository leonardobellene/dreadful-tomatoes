import { Link } from "react-router-dom";

import "./Poster.scss";

interface PosterProps {
  to: string;
  img: string;
  imgAlt: string;
  icon: string;
  iconAlt: string;
  children: React.ReactNode;
}

export function Poster({ to, img, imgAlt, icon, iconAlt, children }: PosterProps): JSX.Element {
  return (
    <Link className="poster" to={to}>
      <img className="poster-image" src={img} alt={imgAlt} />
      <div className="poster-text-container">
          <img width={24} src={icon} alt={iconAlt} />
          <p className="poster-text">{children}</p>
      </div>
    </Link>
  );
}
