import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import AlbumTile from "./AlbumTile";
import { albumsMocks } from "../../../mocks/album-mocks";
import TestContextWrapper from "../../../test-helpers/test-context-wrapper";

describe("AlbumList", () => {
  test("should render a single album with cover image", async () => {
    const [albumMock] = albumsMocks;
    render(
      <TestContextWrapper>
        <AlbumTile {...albumMock} />
      </TestContextWrapper>
    );
    const coverImage = await screen.findByRole("img");
    expect(coverImage).toBeInTheDocument();
  });
});