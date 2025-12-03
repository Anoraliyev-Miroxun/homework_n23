import type { ColumnDef } from "@tanstack/react-table";
import { useGroupsList } from "../services/quvery/useGroupsList";
import React from "react";
import { TeacherTable } from "../components/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useToggle } from "@/hooks/useToggle";
import { Spinner } from "@/components/ui/spinner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GroupForm } from "../components/group-form";
import { useDeleteGroup } from "../services/mutation/useDeleteGroup";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";


type Groups = {
    count: number;
    studentCount: number;
    name: string;
    id?: string;
    isActive: "Active" | "Blocked";
    startTime: string;
    endTime: string;
    teacherId?: string;
    durationInMonths: string;
    teacherName: string;
    teacherAvatarUrl: string;
};


export const Groups = () => {
    const { data, isLoading } = useGroupsList();
    const { close, open, isOpen } = useToggle();
    const { mutate, isPending } = useDeleteGroup()
    const client = useQueryClient();
    const [editId, setEditID] = React.useState("");


    const navigate = useNavigate();

    const columns: ColumnDef<Groups>[] = [
        {
            accessorKey: "count",
            header: "Count",
        },
        {
            accessorKey: "studentCount",
            header: "Student Count",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "startTime",
            header: "Start Time",
        },
        {
            accessorKey: "endTime",
            header: "End Time",
        },
        {
            accessorKey: "durationInMonths",
            header: "Duration In Months",
        },
        {
            accessorKey: "teacherName",
            header: "Teacher Name",
        },
        {
            accessorKey: "teacherAvatarUrl",
            header: "T Image",
            cell: ({ row }) => {
                const url = row.original;
                return (
                    <>
                        {
                            url.teacherId ? (
                                <Link
                                    className="block border-2 border-transparent hover:border-blue-500 transition w-[30px] h-[30px] rounded-full overflow-hidden"
                                    to={`/app/admin/teacher/${url.teacherId}`}
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={url.teacherAvatarUrl}
                                        alt="img"
                                    />
                                </Link>
                            ) : (
                                ""
                            )
                        }
                    </>
                )
            }
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
                
                const deleteTeacher = () => {
                    if (teacher.id) {
                        mutate(teacher.id, {
                            onSuccess: (res) => {
                                toast.success(res.message.uz, { position: "bottom-right" });
                                client.invalidateQueries({ queryKey: ["groups"] });
                            },
                            onError: (error) => console.log(error),
                        });
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
                            <DropdownMenuItem onClick={() => navigate(`/app/admin/group/${teacher.id}`)}>Details</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate(`/app/admin/group/${teacher.id}`)}>Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={deleteTeacher}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>;
            },
        },
    ];

    const groups: Groups[] = React.useMemo(() => {
        if (!Array.isArray(data?.data)) return [];
        return data.data.map((item, index) => ({
            count: index + 1,
            id: item.id,
            studentCount: item.students.length,
            isActive: item.isActive ? "Active" : "Blocked",
            name: item.name,
            teacherId: item?.teacher?.id,
            startTime: item?.startTime || "0",
            endTime: item?.endTime || "0",
            teacherName: item?.teacher?.name,
            durationInMonths: `${item?.durationInMonths || "0"}`,
            teacherAvatarUrl: item?.teacher?.avatarUrl,

        }));
    }, [data]);

    const closeEditModal = () => {
        close();
    }


    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Dialog onOpenChange={closeEditModal} open={isOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Teacher Create</DialogTitle>
                                <DialogDescription>
                                    <GroupForm closeEditModal={closeEditModal} />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <Button onClick={open} className="mb-5">
                        Create
                    </Button>
                    <TeacherTable columns={columns} data={groups} />
                </>
            )}
        </div>
    );

}

