import { Link } from "react-router-dom";
import { CreateUser } from "../form/form";
import { Button } from "../ui/button";
import { useState } from "react";
import { TurkishLira } from "lucide-react";
import { useDeleteUser } from '../../pages/home/service/mutation/useDeleteUser.ts';
import { useQueryClient } from "@tanstack/react-query";
import { number } from "zod";



interface UserLIst {
  name: string;
  email: string;
  username?: string;
  id: number;
}

export const Card = ({ email, name, username, id }: UserLIst) => {
  const [toggle, setToggle] = useState(false);
  const client = useQueryClient();
  const { mutate: deleteUser, isPending: deleteLoading } = useDeleteUser(
    
  );
const userDelete = () => {
  deleteUser(id,{
    onSuccess: () => {
      client.setQueriesData(
        { queryKey: ["user_list"] },
        (oldData: UserLIst[] | undefined) => {
          if (!oldData) return []; // yoki null qaytarish mumkin

          return oldData.filter((i) => i.id !== id);
        }
      );
    },
  });
};


  return (
    <div className="border rounded-2xl p-5 my-5 border-blue-400">
      <h2 className="text-4xl hover:text-blue-400">
        <Link to={`/product/${id}`}>{name}</Link>
      </h2>
      <p>{email}</p>
      <p>{username}</p>
      <Button onClick={userDelete} className="bg mr-4 bg-red-600">Delete</Button>
      <CreateUser email={email} name={name} username={username} id={id} />

    </div>
  );
};
