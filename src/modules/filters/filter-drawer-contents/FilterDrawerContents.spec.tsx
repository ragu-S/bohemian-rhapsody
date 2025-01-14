import { render, screen } from "@testing-library/react";
import FilterDrawerContents from "./FilterDrawerContents";
import { filters } from "../../../mocks/filters-mocks";
import TestContextWrapper from "../../../test-helpers/test-context-wrapper";

describe("FilterDrawerContents", () => {
  test("should render a list of Filter options", async () => {
    const [{ type, entries }] = filters;
    render(
      <TestContextWrapper>
        <FilterDrawerContents type={type} contents={entries} />
      </TestContextWrapper>
    );
    const filtersRendered = await screen.findAllByRole("checkbox");
    expect(filtersRendered).toHaveLength(3);
  });
});