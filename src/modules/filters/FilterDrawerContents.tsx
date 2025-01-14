import { useContext } from "react";
import FilterOptions from "./FilterOptions";
import { FiltersContext } from "../../services/context/filters-context";

const FilterDrawerContents = ({ type, contents }: { type: string, contents: Map<string, boolean> }) => {
  const contentsArray: [string, boolean][] = Array.from(contents.entries());
  const { updateSelectedFilters } = useContext(FiltersContext);

  return contentsArray.map(([label, value], index) => {
    const id = `${label}-${value}-${index}`;
    return <FilterOptions id={id} key={id} type={type} value={value} label={label} onUpdateSelectedFilters={updateSelectedFilters} />
  })
}

export default FilterDrawerContents;