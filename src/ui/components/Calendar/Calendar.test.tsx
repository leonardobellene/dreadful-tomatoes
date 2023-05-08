import { render, fireEvent } from "@testing-library/react";
import { Calendar } from "./Calendar";

const allYears = Array.from({ length: 100 }, (_, i) => 1900 + i);
const selectedYear = 1912;
const handleYearChange = jest.fn();
const handleClickOutside = jest.fn();

describe("Calendar", () => {
  it("renders correctly with selected year", () => {
    const { getByText, getAllByRole } = render(
      <Calendar
        allYears={allYears}
        selectedYear={selectedYear}
        handleYearChange={handleYearChange}
        handleClickOutside={handleClickOutside}
      />
    );

    expect(getByText(selectedYear)).toBeInTheDocument();
    expect(getAllByRole("button").length).toBe(12);
  });

  it("renders correctly without selected year", () => {
    const { getByText, getAllByRole } = render(
      <Calendar
        allYears={allYears}
        selectedYear={null}
        handleYearChange={handleYearChange}
        handleClickOutside={handleClickOutside}
      />
    );

    expect(getByText("Year")).toBeInTheDocument();
    expect(getAllByRole("button").length).toBe(12);
  });

  it("disables previous page button on first page", () => {
    const { getByAltText } = render(
      <Calendar
        allYears={allYears}
        selectedYear={selectedYear}
        handleYearChange={handleYearChange}
        handleClickOutside={handleClickOutside}
      />
    );

    const prevButton = getByAltText("left arrow icon");

    fireEvent.click(prevButton);
    expect(prevButton).toHaveClass('disabled');
  });

  it("calls handleYearChange on year button click", () => {
    const { getAllByRole } = render(
      <Calendar
        allYears={allYears}
        selectedYear={selectedYear}
        handleYearChange={handleYearChange}
        handleClickOutside={handleClickOutside}
      />
    );

    const yearButton = getAllByRole("button")[0];

    fireEvent.click(yearButton);
    expect(handleYearChange).toHaveBeenCalledWith(allYears[0]);
  });

  it("calls handleClickOutside on outside click", () => {
    const { getByTestId } = render(
      <>
        <div data-testid="outside"></div>
        <Calendar
          allYears={allYears}
          selectedYear={selectedYear}
          handleYearChange={handleYearChange}
          handleClickOutside={handleClickOutside}
        />
      </>
    );

    const outside = getByTestId("outside");

    fireEvent.mouseDown(outside);
    expect(handleClickOutside).toHaveBeenCalled();
  });
});
