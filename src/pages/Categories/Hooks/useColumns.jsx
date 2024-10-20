
import {
    EnvelopeIcon,
    PhoneIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import DeleteCategory from "../Partials/DeleteCategory";
import { generateUniqueColor } from "../../../utils/generateUniqueColor";
import { API_URL } from "../../../config/api";

export const useColumns = (props) => {
    return useMemo(() => {
        return [
            {
                accessorFn: (row) => row,
                id: "id",
                cell: (info) => (
                    <span className="">
                        {info.getValue().id}
                    </span>
                ),
                header: () => "#ID",
            },
            {
                accessorKey: "image",
                cell: (info) => {
                    return (
                        <a 
                        href={info.getValue()}
                      >
                          <img src={info.getValue()} alt={info.getValue()} className="w-16 h-16 mr-4" /> 
                      </a>
                    );
                },
                header: () => "Image",
            },
            {
                accessorKey: "description",
                cell: (info) => {
                    return (
                        <span
                            className="text-black"
                        >
                            {info.getValue()}
                        </span>
                    );
                },
                header: () => "Description",
            },
            {
                accessorKey: "name",
                cell: (info) => {
                    const color = generateUniqueColor(info.getValue());
                    return (
                        <span
                            className={`text-white rounded-md text-xs p-2`}
                            style={{ backgroundColor: color }}
                        >
                            {info.getValue()}
                        </span>
                    );
                },
                header: () => "Nom",
            },
            {
                accessorKey: "products",
                cell: (info) => (
                    <span className="text-red-500 text-md">
                        {info.getValue().length}
                    </span>
                ),
                header: () => "Produits",
            },
            {
                accessorFn: (row) => row,
                id: "id",
                cell: (info) => (
                    <div className="flex space-x-2">
                        <span className='m-2'>
                        <Link 
                              to={`/bulker/admin/categories/${info.getValue().id}/edit`}
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white border border-green-300 rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-black disabled:opacity-25 transition ease-in-out duration-150"
                            >
                                <FiEdit className="" />
                            </Link>
                        </span>
                        <DeleteCategory category={info.getValue()} />
                    </div>
                ),
                header: () => "Action",
            },
        ];
    }, [props]);
};
