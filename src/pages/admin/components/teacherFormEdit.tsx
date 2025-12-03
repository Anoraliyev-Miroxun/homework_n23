import { useSearchParams } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { useEditTeacher } from "../services/mutation/useEditTeacher";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { IResponse, TeacherDetailT, TeacherList } from "../type";
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useSpecification } from "../services/quvery/useSpisification";


const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().optional(),
    specification: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
});

interface FormProps {
    defaultValueData?: TeacherDetailT;
    closeModal?: () => void;
    teacherId?: string;
}

export const TeacherFormEdit = ({
    closeModal,
    defaultValueData,
    teacherId,
}: FormProps) => {
    const { mutate, isPending } = useEditTeacher(teacherId as string);
    const client = useQueryClient();
    const { data, isLoading } = useSpecification()

    const form = useForm<z.infer<typeof formSchema>>({

        resolver: zodResolver(formSchema),
        defaultValues: {
            username: defaultValueData?.data?.username || "",
            specification: defaultValueData?.data?.specifications[0]?.id || "",
            name: defaultValueData?.data?.name || "",
            password: "",
        },
    });



    const onSubmitttt = (data: z.infer<typeof formSchema>) => {
        if (defaultValueData) {
            return mutate({
                name: data.name,
                username: data.username,
                specification: [data.specification]
            }, {
                onSuccess: (res) => {
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
        }

    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmitttt)}
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


                <Button type="submit">
                    {isPending ? <Spinner /> : ""} Submit
                </Button>
            </form>
        </Form>
    )
}