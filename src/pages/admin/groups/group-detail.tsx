import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useGroupDetail } from "../services/quvery/useGroupDiteail";
import { TeacherFormWrapper } from "../components/teacherWrapperForm";
import { GroupFormWrapper } from "../components/groupWrapperForm";

export const GroupDetail = () => {
    const { id } = useParams();
    const client = useQueryClient();
    // const { data, isLoading, isFetching } = useGroupDetail(id as string);
    const navigate = useNavigate();

    const closeModal = () => {
        navigate(-1);
    };




    return (
        <>
            <GroupFormWrapper
                closeEditModal={closeModal}
                id={id || ""}
            />

        </>
    )
}