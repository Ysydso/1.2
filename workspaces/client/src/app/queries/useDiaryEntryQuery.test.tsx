import { renderHook, waitFor } from "@testing-library/react";
import { buildDiaryEntry } from "lib/util/buildDiaryEntry";
import { rest } from "msw";
import { wrap } from "souvlaki";
import { diaryEntryUriTemplate } from "test/mocks/diaryEntryUriTemplate";
import { server } from "test/mocks/server";
import { withQueryClient } from "test/wrappers/withQueryClient";
import { describe, expect, it } from "vitest";
import { useDiaryEntryQuery } from "./useDiaryEntryQuery";

describe("useDiaryEntryQuery", () => {
  it("returns response.json", async () => {
    const date = "2022-08-14";
    const { result } = renderHook(() => useDiaryEntryQuery(date), {
      wrapper: wrap(withQueryClient()),
    });

    await waitFor(() =>
      expect(result.current.data?.diaryEntry).toEqual(buildDiaryEntry({ date }))
    );
  });

  it("returns an error if fetch fails", async () => {
    server.use(
      rest.get(diaryEntryUriTemplate, (_, res, ctx) => res(ctx.status(404)))
    );

    const { result } = renderHook(() => useDiaryEntryQuery("TEST"), {
      wrapper: wrap(withQueryClient()),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});