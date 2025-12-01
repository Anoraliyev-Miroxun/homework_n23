import { TeacherTable } from '../components/table.tsx';
import { useTeacherList } from '../services/quvery/useTeacherList.ts';

import type { ColumnDef } from "@tanstack/react-table"
import { Spinner } from '@/components/ui/spinner.tsx';
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToggle } from '@/hooks/useToggle.ts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { TeacherFormEdit } from '../components/teacherFormEdit.tsx';
import { TeacherForm } from '../components/createFormCreate.tsx';

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
    const { close, open, isOpen } = useToggle();
    const { close: close2, open: open2, isOpen: isOpen2 } = useToggle();
    const [ _ , setSearchParams ] = useSearchParams();
    const navigate = useNavigate();


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
            cell: ({ row }) => {
                const teacher = row.original;
                const editTeacher = () => {
                    if (teacher.id) {
                        setSearchParams({ editId: teacher.id })
                        open2();
                    }
                }
                return <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger >
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={editTeacher}>Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => navigate(`/app/admin/teacher/${teacher.id}`)}
                            >
                                View payment details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>;
            },
        },
    ]
    const closeEditModal = () => {
        setSearchParams("");
        close2();
    }

    return (
        <div>{
            isLoading ? (<Spinner />) : (<>

                <Dialog onOpenChange={closeEditModal} open={isOpen2}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Teacher Edit</DialogTitle>
                            <DialogDescription asChild>
                                <div>
                                    <TeacherFormEdit closeModal={close2} />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Dialog onOpenChange={close} open={isOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Teacher Create</DialogTitle>
                            <DialogDescription asChild>
                                <div>
                                    <TeacherForm closeModal={close} />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Button onClick={open} className="mb-5">
                    Create
                </Button>

                <TeacherTable columns={columns} data={teachers} />

            </>)
        }

        </div>
    )
}