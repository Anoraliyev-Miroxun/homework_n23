import { Link } from "react-router";
import type { TaskList } from "../store/service/user-api";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../store/service/user-api";
import { useState } from "react";
import { Form } from "./form";
import { set, useForm } from "react-hook-form";


interface IUpdate {
  title?: string;
  description?: string;
}
export const Card = ({ description, id, title }: TaskList) => {
  const [mutate, { isLoading }] = useDeleteTaskMutation();
  const [toggle, setToggle] = useState(false)
  const [save, setSave] = useState(false)
  const { handleSubmit, register, reset } = useForm<IUpdate>();
  const [mutat] = useUpdateTaskMutation();
  const [name, setName] = useState(title)
  const [descrip, setDescript] = useState(description)

  const update = (data: IUpdate) => {
    if (save) {
      mutat({...data,id})
        .unwrap()
        .then((res) => {
          console.log(res);
        });
      reset();
      setSave(false)
      setToggle(false)
    }
  }


  // const[mutate,{isLoading}]=useUpdateTaskMutation();

  const deleteTask = () => {
    mutate(id)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <h1 className="text-4xl">
        <Link to={`/task/${id}`}>{title}</Link>
      </h1>
      <p>{description}</p>
      {
        toggle ?
          <div>
            <form onSubmit={handleSubmit(update)}>
              <div>
                <input defaultValue={title}  {...register("title")} className="bg-amber-300" type="text" />
              </div>
              <div>
                <input
                  defaultValue={description}
                  {...register("description")}
                  className="bg-amber-300"
                  type="text"
                />
              </div>
              <button onClick={(e) => setSave(true)} className="p-2 bg-green-300"> save </button>
            </form>
          </div>
          : <button onClick={(e) => setToggle(true)} className="bg-amber-500 p-3">UPDATE</button>
      }
      <button onClick={deleteTask} className="bg-red-400 p-3">

        {isLoading ? "Loading..." : "delete"}
      </button>
    </div>
  );
};
