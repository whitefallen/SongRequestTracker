/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

function Header() {
  return (
    <div>
      <div className="p-2 bg-green-300">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">SongRequestTracker - List</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full border-t border-gray-300"></div>
      </div>
    </div>
  )
}
export default Header;