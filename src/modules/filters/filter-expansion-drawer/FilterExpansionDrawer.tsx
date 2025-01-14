import { useState } from "react";
import FilterDrawerContents from "../filter-drawer-contents/FilterDrawerContents";
import { TFilter } from "../../../services/context/types";
import { CollapseIcon } from "../../core/components/Icons/CollapseIcon";
import { ExpansionIcon } from "../../core/components/Icons/ExpansionIcon";

const FilterExpansionDrawer = ({ type, label, entries }: TFilter) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClickExpansionDrawerButton = () => setIsOpen(!isOpen);

  return <div className="px-4 py-6">
    <h3 className="-mx-2 -my-3 flow-root">
      {/* <!-- Expand/collapse section button --> */}
      <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false" onClick={handleOnClickExpansionDrawerButton}>
        <span className="font-medium text-gray-900">{label}</span>
        <span className="ml-6 flex items-center">
          {
            isOpen ? <CollapseIcon /> : <ExpansionIcon />
          }
        </span>
      </button>
    </h3>
    {/* <!-- Filter section, show/hide based on section state. --> */}
    {
      isOpen && <FilterDrawerContents type={type} contents={entries} />
    }
  </div>
};

export default FilterExpansionDrawer;