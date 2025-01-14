import { TFilter } from "../../services/context/types";
import FilterExpansionDrawer from "./filter-expansion-drawer/FilterExpansionDrawer";

const Filters = ({ filters }: { filters: TFilter[] }) => {
  return <form className="hidden lg:block">
    {filters.map(({ type, label, entries }) => <FilterExpansionDrawer type={type} label={label} entries={entries} key={label} />)}
  </form>
}

export default Filters;