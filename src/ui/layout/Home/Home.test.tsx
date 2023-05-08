import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "ui/layout/Home/Home";

test("renders the home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const homeDiv = screen.getByTestId("home-div");
  expect(homeDiv).toBeInTheDocument();
});
