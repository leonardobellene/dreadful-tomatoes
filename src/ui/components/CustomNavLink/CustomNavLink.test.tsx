import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CustomNavLink } from "./CustomNavLink";

describe("CustomNavLink", () => {
    it("renders correctly", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <CustomNavLink to="/path" icon="icon.svg" alt="Icon Alt Text">
                    NavLink Text
                </CustomNavLink>
            </MemoryRouter>
        );

        expect(screen.getByText("NavLink Text")).toBeInTheDocument();
        expect(screen.getByAltText("Icon Alt Text")).toBeInTheDocument();
    });
});
