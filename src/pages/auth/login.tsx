import { Button } from "@/components/ui/button"
import { email, positive, string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Spinner } from "@/components/ui/spinner"
import { useNavigate } from "react-router-dom";


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input";
import { useLogin } from "./services/useLogin";
import Cookie from 'js-cookie';
import { toast } from "sonner";
import { Navigate } from "react-router-dom";




const formSearch = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    role: z.string().min(2).max(50)
})


export const Login = () => {
    const { mutate, isPending } = useLogin()
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSearch>>({
        resolver: zodResolver(formSearch),
        defaultValues: {
            username: "Admin1",
            password: "Admin1!",
            role: "Admin"
        }
    })

    const onSubmit = (data: z.infer<typeof formSearch>) => {
        mutate(data, {
            onSuccess: (res) => {
                Cookie.set("token", res.data.token)
                Cookie.set("role", res.data.user.role.toLowerCase());

                toast.success(res.message.uz, {
                    position: "bottom-right"
                });

                navigate(`/app/${res.data.user.role.toLowerCase()}`)
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }
    return (
        <div className="fixed bg-amber-400 inset-0 flex items-center justify-center">
            <Button className="absolute right-5 cursor-pointer top-5">Sing in</Button>
            <div className="bg-blue-200 w-[500px] shadow rounded-lg p-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Admin">Admin</SelectItem>
                                                <SelectItem value="Teacher">Teacher</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">{isPending ? <Spinner /> : ""}Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}