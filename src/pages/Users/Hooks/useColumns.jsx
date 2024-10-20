
import {
    EnvelopeIcon,
    PhoneIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
//import DeleteUser from "../Partials/DeleteUser";
import { FiEdit } from "react-icons/fi";
import Avatar from "../../../components/Avatar";
import Chip from "../../../components/Chip";
import { Link } from "react-router-dom";
import DeleteUser from "../Partials/DeleteUser";

export const useColumns = (
    props,
)=> {
    return useMemo(() => {
        return [
            {
                accessorFn: (row) => row,
                id: "id",
                cell: (info) => {
                    const { email, first_name, last_name } =
                        info.getValue();
                    return (
                        <div className="flex items-center gap-2">
                            <Avatar size="lg" src="" alt={first_name+" "+last_name} />
                            <div className="space-y-2">
                                <h2 className="text-[16px] font-semibold">
                                    {first_name+" "+last_name}
                                </h2>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1 text-xs font-thin italic">
                                        <EnvelopeIcon className="w-3 h-3" />
                                        {email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                },
                header: () => "Utilisateur",
            },
            {
                accessorKey: "phone",
                cell: (info) => (
                    <span className="text-md text-graydark">
                        {info.getValue()}
                    </span>
                ),
                header: () => "Phone",
            },
            {
                accessorKey: "role",
                cell: (info) => (
                    <Chip type={info.getValue()==='user' ? "success" : "error"}>
                        {info.getValue()==='user' ? "Utilisateur" : "Admnistrateur"}
                    </Chip>
                ),
                header: () => "Role",
            },
            {
                accessorFn: (row) => row,
                id: "id",
                cell: (info) => (
                    <div className="flex space-x-2">
                        <span className='m-2'>
                            {/* <Link
                                to="{route('users.edit', info.getValue().id)}"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white border border-green-300 rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-black disabled:opacity-25 transition ease-in-out duration-150 "
                                >
                                    <FiEdit className="" />
                            </Link>  */}
                        </span> 
                        <DeleteUser user={info.getValue()} />
                    </div>
                ),
                header: () => "Action",
            },
        ];
    }, [props]);
};
