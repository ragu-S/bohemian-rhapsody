import { TFilterOptions } from "../../services/context/types";
import FilterExpansionDrawer from "./FilterExpansionDrawer";

const Filters = ({ filters }: { filters: TFilterOptions }) => {
  const filtersList = Object.values(filters);
  return <form className="hidden lg:block">
    {filtersList.map(({ type, label, entries }) => <FilterExpansionDrawer type={type} label={label} entries={entries} key={label} />)}
  </form>
}

export default Filters;