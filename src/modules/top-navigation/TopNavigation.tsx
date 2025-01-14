import { useState } from "react";


const TopNavigation = () => {
  const [isSortMenuOpen, setSortMenuOpen] = useState(false);

  const handleOnClickSortMenu = () => {
    console.log("open sort", isSortMenuOpen);
    setSortMenuOpen(!isSortMenuOpen);
  };

  return <div className="relative inline-block text-left">
    <div>
      <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true" onClick={handleOnClickSortMenu}>
        Sort
        <svg className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

    {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
    {
      isSortMenuOpen && <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          {/* <!--
        Active: "bg-gray-100 outline-none", Not Active: ""

        Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
      --> */}
          <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-0">Most Popular</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-1">Best Rating</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-2">Newest</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-3">Price: Low to High</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-4">Price: High to Low</a>
        </div>
      </div>
    }
  </div>
};

export default TopNavigation;