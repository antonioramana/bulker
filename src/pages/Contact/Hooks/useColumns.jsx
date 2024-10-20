import { useMemo } from "react";
import { generateUniqueColor } from "../../../utils/generateUniqueColor";
import DeleteContact from "../Partials/DeleteContact";

export const useColumns = (props) => {
    return useMemo(() => {
        return [
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
                accessorKey: "email",
                cell: (info) => (
                    <span className="text-blue-950 text-md">
                        {info.getValue()}
                    </span>
                ),
                header: () => "Email",
            },
            {
                accessorKey: "subject",
                cell: (info) => (
                    <span className="text-blue-950 text-md">
                        {info.getValue()}
                    </span>
                ),
                header: () => "Sujet",
            },
            {
                accessorKey: "message",
                cell: (info) => (
                    <span className="text-md">
                        {info.getValue()}
                    </span>
                ),
                header: () => "Message",
            },
            {
                accessorFn: (row) => row,
                id: "id",
                cell: (info) => (
                    <div className="flex space-x-2">
                        <DeleteContact contact={info.getValue()} fetchcontacts={props.fetchcontacts}/>
                    </div>
                ),
                header: () => "Action",
            },
        ];
    }, [props]);
};
