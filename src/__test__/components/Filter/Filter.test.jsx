import {
  fireEvent,
  render as testRender,
  screen,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Filter from "../../../components/Filter";

import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const render = (component) =>
  testRender(<Provider store={store}>{component}</Provider>);

describe("controlling the filter checkboxes", () => {
  it("gender checkbox", () => {
    render(<Filter />);

    const femaleFilter = screen.getByRole("radio", { name: "Female" });
    const maleFilter = screen.getByRole("radio", { name: "Male" });
    const genderlessFilter = screen.getByRole("radio", { name: "Genderless" });

    expect(femaleFilter, maleFilter, genderlessFilter).toBeInTheDocument();

    fireEvent.click(femaleFilter);
    expect(femaleFilter).toBeChecked();

    fireEvent.click(maleFilter);
    expect(maleFilter).toBeChecked();

    fireEvent.click(genderlessFilter);
    expect(genderlessFilter).toBeChecked();
  });

  it("species checkbox", () => {
    render(<Filter />);

    const humanFilter = screen.getByRole("radio", { name: "Human" });
    const alienFilter = screen.getByRole("radio", { name: "Alien" });

    expect(humanFilter, alienFilter).toBeInTheDocument();

    fireEvent.click(humanFilter);
    expect(humanFilter).toBeChecked();

    fireEvent.click(alienFilter);
    expect(alienFilter).toBeChecked();
  });

  it("clear filters button", () => {
    render(<Filter />);

    const femaleFilter = screen.getByRole("radio", { name: "Female" });
    const humanFilter = screen.getByRole("radio", { name: "Human" });
    const clearFilterButton = screen.getByRole("button", {
      name: "Clear filters",
    });

    expect(femaleFilter, humanFilter, clearFilterButton).toBeInTheDocument();

    fireEvent.click(femaleFilter);
    expect(femaleFilter).toBeChecked();

    fireEvent.click(humanFilter);
    expect(humanFilter).toBeChecked();

    fireEvent.click(clearFilterButton);
    expect(femaleFilter).not.toBeChecked();
    expect(humanFilter).not.toBeChecked();
  });
});
