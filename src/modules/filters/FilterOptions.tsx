import React from "react";
import { CheckIcon } from "../core/components/Icons/CheckIcon";
import { TUpdateSelectedFilters } from "../../services/context/types";

const FilterOptions = ({ id, type, value, label, onUpdateSelectedFilters }: { id: string, type:string, value: boolean, label: string, onUpdateSelectedFilters: TUpdateSelectedFilters }) => {
  return <div className="pt-6" id="filter-section-mobile-0" key={id}>
    <div className="space-y-6">
      <div className="flex gap-3">
        <div className="flex h-5 shrink-0 items-center">
          <div className="group grid size-4 grid-cols-1">
            <input
              id={id}
              name={id}
              value={id}
              type="checkbox"
              checked={value}
              onChange={() => onUpdateSelectedFilters({ type, label, value })}
              className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
            />
            <CheckIcon />
          </div>
        </div>
        <label htmlFor={id} className="min-w-0 flex-1 text-gray-500 text-left">{label}</label>
      </div>
    </div>
  </div>
};

export default React.memo(FilterOptions)