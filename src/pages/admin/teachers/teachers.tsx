import { da } from 'zod/v4/locales';
import { TeacherTable } from '../components/table.tsx';
import { useTeacherList } from '../services/quvery/useTeacherList.tsx';

import type { ColumnDef } from "@tanstack/react-table"
import { Spinner } from '@/components/ui/spinner.tsx';
import React from 'react';
import { Button } from "@/components/ui/button";

type Payment = {
  count: number;
  name: string;
  id?: string;
  specification: string;
  isActive: "Active" | "Blocked";
  groups: number;
  username: string;
};



export const Teachers = () => {
    const { data, isLoading } = useTeacherList()

    const teachers: Payment[] = React.useMemo(() => {
        if (!Array.isArray(data?.data)) return [];
        return data.data.map((item, index) => ({
            groups: item.groups?.length || 0,
            id: item.id,
            count: index + 1,
            isActive: item.isActive ? "Active" : "Blocked",
            name: item.name,
            specification: item.specification,
            username: item.username,
        }));
    }, [data])

    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: "count",
            header: "Count",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "specification",
            header: "Specification",
        },
        {
            accessorKey: "username",
            header: "Username",
        },
        {
            accessorKey: "groups",
            header: "Groups",
        },
        {
            accessorKey: "isActive",
            header: "Status",
        },
        {
      id: "actions",
      header: "Actions",
      cell: () => {
        // const teacher = row.original;
        return <Button>lorem</Button>;
      },
    },
    ]

    return (
        <div>{
            isLoading ? <Spinner /> : <TeacherTable columns={columns} data={teachers} />
        }

        </div>
    )
}