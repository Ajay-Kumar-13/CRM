import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";
import { useMemo } from "react";

function UsersTable() {

  const data = useMemo(() => [
    {
      id: 1,
      name: "Timothy Janson",
      email: "timothy@acme.com",
      status: "Not signed up",
      roles: "Manager"
    },
    {
      id: 2,
      name: "Gavin Truman",
      email: "gavin@acme.com",
      status: "Active",
      roles: "Learner"
    },
    {
      id: 3,
      name: "Ella Torto",
      email: "ella@acme.com",
      status: "Deactivated",
      roles: "Admin"
    }
  ], []);

  const columns = useMemo(() => [
    {
      id: "name",
      header: () => <span>Name</span>,
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="name-cell">
          <div className="avatar">{row.original.name[0]}</div>
          <div>
            <div className="name">{row.original.name}</div>
            <div className="email">{row.original.email}</div>
          </div>
        </div>
      )
    },
    {
      id: "status",
      header: () => <span>Status</span>,
      accessorKey: "status",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <span className={`badge ${value.replaceAll(" ", "").toLowerCase()}`}>
            {value}
          </span>
        );
      }
    },
    {
      id: "roles",
      header: () => <span>Roles</span>,
      accessorKey: "roles"
    }
  ], []);
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className="users-table">
      <thead>
        {table.getHeaderGroups().map(hg => (
          <tr key={hg.id}>
            {hg.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
