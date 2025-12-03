import { Spinner } from "@/components/ui/spinner";
import { useTeacherDetail } from "../services/quvery/useTeacherDiteail";
import { TeacherFormEdit} from "./teacherFormEdit";

export const TeacherFormWrapper = ({
  id,
  closeEditModal,
}: {
  id: string;
  closeEditModal: () => void;
}) => {
  const { data, isLoading } = useTeacherDetail(id);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <TeacherFormEdit
          closeModal={closeEditModal}
          teacherId={id}
          defaultValueData={data}
        />
      )}
    </div>
  );
};
