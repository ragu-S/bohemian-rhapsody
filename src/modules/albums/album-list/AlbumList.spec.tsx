import { render, screen } from "@testing-library/react";
import AlbumList from "./AlbumList";
import { albumsMocks } from "../../../mocks/album-mocks";
import TestContextWrapper from "../../../test-helpers/test-context-wrapper";

describe("AlbumList", () => {
  test("should render a list of albums", async () => {
    render(
      <TestContextWrapper>
        <AlbumList albums={albumsMocks} />
      </TestContextWrapper>
    );
    const albums = await screen.findAllByRole("listitem");
    expect(albums).toHaveLength(2);
  });
});