import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders the Header component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const headerDiv = screen.getByTestId("header-div");
    expect(headerDiv).toBeInTheDocument();
  });
});
