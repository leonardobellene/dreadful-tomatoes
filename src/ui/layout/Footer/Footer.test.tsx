import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render the logo, mobile icons, and copyright information", () => {
    render(<Footer />);

    const logo = screen.getByAltText("logo icon");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "deadful tomatoes.svg");
    expect(logo).toHaveAttribute("width", "154");

    const appleIcon = screen.getByAltText("apple store icon");
    expect(appleIcon).toBeInTheDocument();
    expect(appleIcon).toHaveAttribute("src", "app store.svg");
    expect(appleIcon).toHaveAttribute("width", "128");

    const googleIcon = screen.getByAltText("google play icon");
    expect(googleIcon).toBeInTheDocument();
    expect(googleIcon).toHaveAttribute("src", "google play.svg");
    expect(googleIcon).toHaveAttribute("width", "128");

    const copyright = screen.getByText(
      "© Copyright 2023 Dreadful tomatoes. All rights reserved."
    );
    expect(copyright).toBeInTheDocument();
  });
});
