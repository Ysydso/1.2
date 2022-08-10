import { Builder } from "@diary/shared/types/builder.types";
import { DiaryEntriesRepositoryMethods } from "src/repositories/diaryEntriesRepository";
import { vi } from "vitest";

export const buildMockDiaryEntriesRepository: Builder<
  DiaryEntriesRepositoryMethods
> = (overrides = {}) => ({
  getByDate: vi.fn(),
  save: vi.fn(),
  ...overrides,
});