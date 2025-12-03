import { Spinner } from "@/components/ui/spinner";
import { useGroupDetail } from "../services/quvery/useGroupDiteail";
import { GroupEditForm } from "./groupFormEdit";

export const GroupFormWrapper = ({
  id,
  closeEditModal,
  
}: {
  id: string;
  closeEditModal: () => void;
}) => {
  const { data, isLoading } = useGroupDetail(id);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <GroupEditForm
          closeModal={closeEditModal}
          groupId={id}
          defaultValueData={data}
        />
      )}
    </div>
  );
};
