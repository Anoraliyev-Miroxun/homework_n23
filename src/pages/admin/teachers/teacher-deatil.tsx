import { useNavigate, useParams } from "react-router-dom"
import { useTeacherDetail } from "../services/quvery/useTeacherDiteail";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { toast } from "sonner";
import { useUploadTeacherImage } from "../services/mutation/useUploadTeacherImage";
import { TeacherFormEdit } from "../components/teacherFormEdit";
import { da } from "zod/v4/locales";

export const TeacherDeatil = () => {

    const { id } = useParams();
    const client = useQueryClient()

    const { data, isLoading, isFetched } = useTeacherDetail(id as string);
    const { mutate, isPending } = useUploadTeacherImage(id as string);

    const navigate = useNavigate();

    const closeModal = () => {
        navigate(-1)
    }


    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxSize = 5 * 1024 * 1024;
        if (e.target?.files) {
            if (maxSize < e.target?.files[0].size) {
                toast("File hamjmi katta", { position: "bottom-right" })

            } else {
                const formData = new FormData();
                formData.append("file", e.target.files[0]);
                mutate(formData, {
                    onSuccess: () => {
                        client.invalidateQueries({ queryKey: ["teacher", id] })
                        toast("OK", { position: "bottom-right" });
                    },
                    onError: (err: any) => {
                        console.log(err, "error")
                    },
                });
            }
        }

    }


    return (
        <div>
            {
                isLoading ? (<Spinner />) :
                    (

                        <div>
                            {data?.data.avatarUrl ? (
                                <div>
                                    <div className="rounded-full ml-5 overflow-hidden border h-[90px] w-[90px]">
                                        {
                                            isPending || isFetched ? (
                                                <Spinner />
                                            ) : (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={`${data.data.avatarUrl}`}
                                                    alt="url"
                                                />
                                            )
                                        }
                                    </div>
                                    <label
                                        className="cursor-pointer hover:text-amber-400"
                                        htmlFor="upi"
                                    >
                                        Change image
                                    </label>
                                    <input onChange={uploadImage} hidden id="upi" type="file" />
                                </div>
                            ) : (
                                <>
                                    <Button
                                        className=" rounded-full border h-[90px] w-[90px]"
                                        variant={"ghost"}
                                    >
                                        <UserIcon className="size-16" />
                                    </Button>
                                    <label htmlFor="upload_image">Upload image</label>
                                    <input id="upload_image" type="file" />
                                </>
                            )}
                            <TeacherFormEdit closeModal={closeModal} teacherId={id}
                                defaultValueData={data} />
                        </div>
                    )
            }
        </div>
    )
}