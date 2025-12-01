import { useParams } from "react-router-dom"
import { useTeacherDetail } from "../services/quvery/useTeacherDiteail";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

export const TeacherDeatil = () => {
    
    const { id } = useParams();
    const { data, isPending } = useTeacherDetail(id as string);
    console.log(data,"jjjjjjjjjjjjjjjjjjjjjjj")
    return (
        <div>
            {
                isPending ? (<Spinner />) :
                    (

                        <div>
                            {data?.data.avatarUrl ? (
                                <div>
                                    <div className="rounded-full ml-5 overflow-hidden border h-[90px] w-[90px]">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={data.data.avatarUrl}
                                            alt="url"
                                        />
                                    </div>
                                    <Button variant={"ghost"}>Change image</Button>

                                </div>
                            ) : (
                                <>
                                    <Button
                                        className=" rounded-full border h-[90px] w-[90px]"
                                        variant={"ghost"}
                                    >
                                        <UserIcon className="size-16" />
                                    </Button>
                                    <p>Upload image</p>
                                </>
                            )}
                        </div>
                    )
            }
        </div>
    )
}