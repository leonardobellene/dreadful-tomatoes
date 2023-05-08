import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Poster } from "./Poster";

describe("Poster", () => {
  const to = "/movie/123";
  const img = "https://example.com/movie.jpg";
  const imgAlt = "Movie poster";
  const icon = "https://example.com/movie-icon.png";
  const iconAlt = "Movie icon";
  const children = "Movie Title";

  test("renders poster with correct image, icon, and text", () => {
    render(
      <BrowserRouter>
        <Poster to={to} img={img} imgAlt={imgAlt} icon={icon} iconAlt={iconAlt}>
          {children}
        </Poster>
      </BrowserRouter>
    );

    const posterImage = screen.getByAltText(imgAlt);
    expect(posterImage).toBeInTheDocument();
    expect(posterImage).toHaveAttribute("src", img);

    const posterIcon = screen.getByAltText(iconAlt);
    expect(posterIcon).toBeInTheDocument();
    expect(posterIcon).toHaveAttribute("src", icon);

    const posterText = screen.getByText(children);
    expect(posterText).toBeInTheDocument();
  });

  test("renders poster with correct link", () => {
    render(
      <BrowserRouter>
        <Poster to={to} img={img} imgAlt={imgAlt} icon={icon} iconAlt={iconAlt}>
          {children}
        </Poster>
      </BrowserRouter>
    );

    const posterLink = screen.getByRole("link");
    expect(posterLink).toBeInTheDocument();
    expect(posterLink).toHaveAttribute("href", to);
  });
});
