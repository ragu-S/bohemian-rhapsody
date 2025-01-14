export type TFilterType = Map<string, boolean>;

export type TFilterOptions = Record<string, TFilter>;

export type TFilter = {
  type: string;
  label: string;
  entries: Map<string, boolean>;
}

export type TUpdateSelectedFilters = (filter: { type: string, label: string, value: boolean }) => void;