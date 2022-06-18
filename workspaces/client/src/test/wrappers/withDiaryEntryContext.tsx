import { createHelper } from "souvlaki";
import {
  buildDiaryEntryContextValue,
  DiaryEntryContext,
  DiaryEntryContextValue,
} from "../../context/DiaryEntryContext";

export const withDiaryEntryContext = createHelper(
  (value: Partial<DiaryEntryContextValue>): React.FC<React.PropsWithChildren<{}>> =>
    ({ children }) =>
      (
        <DiaryEntryContext.Provider value={buildDiaryEntryContextValue(value)}>
          {children}
        </DiaryEntryContext.Provider>
      )
);