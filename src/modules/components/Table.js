import {getCoreRowModel, useReactTable, flexRender} from "@tanstack/react-table";
import { getValue } from "@testing-library/user-event/dist/utils";

function Table({data}) {
    const columns = [
        {
            id: "select",
            header: () => <input type="checkbox"/>,
            cell: () => <input type="checkbox"/>
        },
        {
            id:"id",
            header: "Employee Id",
            accessorKey: "id",
            cell: ({getValue}) => (<div className="name">{getValue()}</div>)
        },
        {
            id: "name",
            header: "Name",
            accessorKey: "username",
            cell: ({ row }) => (
                <div className="name-cell">
                    <div className="avatar">{row.original.username[0]}</div>
                    <div>
                        <div className="name">{row.original.username}</div>
                        <div className="email">ajaykumar@gmail.com</div>
                    </div>
                </div>
            )
        },
        {
            id: "role",
            header: "Role",
            accessorKey: "role",
            cell: ({row}) => (
                <div className="name">
                    {row.original.role.name}
                </div>
            )
        },
        {
            id: "authority",
            header: "Authorities",
            accessorKey: "authorities",
            cell: ({row}) => (
                <div className="authorities">
                    {
                        row.original.authorities.map(element => 
                            <span className="authority name">
                                { element.name }
                            </span>
                        )
                    }
                </div>
            )
        },
        {
            id: "actions",
            header: "Actions",
            cell: () => (
                <div className="actions">
                    <button className="editButton name">Edit</button>
                </div>
            )
        }
    ];

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});

    return (
        <table className="users-table">
            <thead>
                {
                    table.getHeaderGroups().map(hg => (
                        <tr key={hg.id}>
                            {
                                hg.headers.map(header => (
                                    <th key={header.id}>
                                        {
                                            flexRender(header.column.columnDef.header, header.getContext())
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody>
                {
                    table.getRowModel().rows.map(row => (
                        <tr>
                            {
                                row.getVisibleCells().map(cell => (
                                    <td>
                                        {
                                            flexRender(cell.column.columnDef.cell, cell.getContext())
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;