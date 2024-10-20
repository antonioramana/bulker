import {
    ArrowLongDownIcon,
    ArrowLongUpIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    PlusIcon,
} from "@heroicons/react/20/solid";
import {
    flexRender,
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useRef, useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function Datagrid({
    className,
    columns,
    rows,
    canCreate,
    filter,
    actions,
    pagination = true,
    minHeight = "350px",
    href,
}) {
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable({
        columns,
        data: rows,
        state: {
            columnFilters,
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    });

    const { rows: _rows } = table.getRowModel();
    const tableContainerRef = useRef(null);

    return (
        <div className={`relative overflow-hidden bg-white text-gray-800 shadow-lg sm:rounded-lg ${className}`}>
            {(canCreate || filter || actions) && (
                <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0 bg-gray-50 border-b border-gray-200">
                    {filter && (
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                                        placeholder="Search..."
                                        value={globalFilter ?? ""}
                                        onChange={(e) => setGlobalFilter(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    )}
                    <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                        {canCreate && (
                            <Link
                                className="inline-flex items-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                to={href}
                            >
                                <PlusIcon className="mr-2 h-4 w-4" />
                                Ajouter
                            </Link>
                        )}
                    </div>
                    {actions && <>{actions}</>}
                </div>
            )}
            <div ref={tableContainerRef} className="relative w-full overflow-auto" style={{ minHeight: minHeight, maxHeight: "700px" }}>
                <table className="w-full table-auto text-left text-sm text-gray-700">
                    <thead className="sticky top-0 bg-blue-950 text-whiten">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id} className="bg-gray-300">
                                {headerGroup.headers.map((header) => (
                                    <th
                                        scope="col"
                                        key={header.id}
                                        className="border-b border-gray-300 px-4 py-3 text-gray-600"
                                    >
                                        {!header.isPlaceholder && (
                                            <div
                                                {...{
                                                    className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}{" "}
                                                {{
                                                    asc: (<ArrowLongUpIcon className="inline h-4 w-4 text-indigo-600" />),
                                                    desc: (<ArrowLongDownIcon className="inline h-4 w-4 text-indigo-600" />),
                                                }[header.column.getIsSorted()] ?? null}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {_rows.map((row, rowIndex) => (
                            <tr
                                key={row.id}
                                className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} border-b border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200`}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {pagination && (
                <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0 bg-gray-50 border-t border-gray-200" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500">
                        Page{" "}
                        <span className="font-semibold text-gray-900">
                            {table.getState().pagination.pageIndex + 1}
                        </span>{" "}
                        sur{" "}
                        <span className="font-semibold text-gray-900">
                            {table.getPageCount().toLocaleString()}
                        </span>
                    </span>
                    <Pagination
                        pageCount={table.getPageCount()}
                        pageRangeDisplayed={5}
                        previousLabel={<ChevronLeftIcon className="h-5 w-5 text-gray-600" />}
                        nextLabel={<ChevronRightIcon className="h-5 w-5 text-gray-600" />}
                        onClick={({ index, isNext, isPrevious }) => {
                            if (isNext && table.getCanNextPage()) {
                                table.nextPage();
                                return;
                            }

                            if (isPrevious && table.getCanPreviousPage()) {
                                table.previousPage();
                                return;
                            }

                            table.setPageIndex(index ?? 0);
                        }}
                        currentPage={table.getState().pagination.pageIndex}
                    />
                </nav>
            )}
        </div>
    );
}
