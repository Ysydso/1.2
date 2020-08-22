import produce from "immer";
import { ActionType, EntriesAction } from "store/actions";
import { buildDiaryEntry, DiaryEntry } from "store/state";
import { convertDateToEntryKey } from "util/date";
import { Maybe } from "util/types";

export const entriesReducer = (
  maybeEntries: Maybe<DiaryEntry[]>,
  action: EntriesAction
) =>
  produce(maybeEntries ?? [], (draftEntries) => {
    switch (action.type) {
      case ActionType.FIELD_CHANGED_ACTION:
        const { date, field, value } = action;
        const dateKey = convertDateToEntryKey(date);

        const entryIndex = draftEntries.findIndex(
          ({ date }) => date === dateKey
        );
        if (entryIndex > -1) {
          draftEntries[entryIndex][field] = value;
        } else {
          draftEntries.push(buildDiaryEntry({ date: dateKey, [field]: value }));
        }
    }
  });
