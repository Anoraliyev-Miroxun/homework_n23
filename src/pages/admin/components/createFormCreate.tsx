import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PasswordInput } from "@/components/ui/password-input";
import { Spinner } from "@/components/ui/spinner";
import { useCreateTeacher } from "../services/mutation/useCreateTeacher";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useSearchParams } from "react-router-dom";
import type { IResponse, TeacherList } from "../type";
import { useSpecification } from "../services/quvery/useSpisification";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().optional(),
  specification: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
});

export const TeacherForm = ({ closeModal }: { closeModal?: () => void }) => {
  const { mutate, isPending } = useCreateTeacher();


  const { data, isLoading } = useSpecification();
  const client = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      specification: "",
      name: "",
    },
  });



  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({ ...data, specification: [data.specification] }, {
      onSuccess: (res) => {
        console.log(res);

        toast.success(res.message.uz, {
          position: "bottom-right",
        });

        client.invalidateQueries({ queryKey: ["teacher_list"] });

        if (closeModal) {
          closeModal();
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-[30px] space-y-[30px]"
      >
        <FormField
          control={form.control}
          name="specification"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Specification</FormLabel>
                <FormControl>
                  {
                    isLoading ? (
                      <Spinner />
                    ) : (
                      <Select
                        key={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full text-black">
                          <SelectValue
                            className="text-black"
                            placeholder="Specification"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            data?.data.map((i) => (
                              <SelectItem key={i.id} value={i.id}>{i.name}</SelectItem>
                            ))
                          }

                        </SelectContent>
                      </Select>
                    )

                  }

                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">
          {isPending ? <Spinner /> : ""} Submit
        </Button>
      </form>
    </Form >
  );
};
