import { Link, useLocation } from "react-router-dom";

import "./CustomNavLink.scss";

interface CustomNavLinkProps {
  to: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

export function CustomNavLink({ to, icon, alt, children }: CustomNavLinkProps): JSX.Element {
  const { pathname } = useLocation();
  const isSelected = pathname === to;

  return (
    <Link to={to} className={`custom-nav-link ${isSelected ? "selected" : ""}`}>
      <div className={"nav-button-container"}>
        <img width={32} src={icon} alt={alt} />
        <p>{children}</p>
      </div>
    </Link>
  );
};
