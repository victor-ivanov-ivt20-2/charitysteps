import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "../ui/use-toast";
import axios from "axios";
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Имя хотя бы должно иметь 2 символа",
  }),
  surname: z.string(),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
  sex: z.string(),
});
const Register = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const token = localStorage.getItem("token");
    localStorage.setItem("name", data.name);
    if (data.confirmPassword == data.password && token) {
      axios
        .post(
          "https://api.charity-steps.ru/api/auth/register/update",
          {
            name: data.name,
            surname: data.surname,
            password: data.password,
            sex: data.sex,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          if (typeof window !== "undefined") {
            window.location.href = "/main";
          }
        });
    }
  }

  return (
    <div className="flex flex-col gap-6 px-4 h-full">
      <div className="py-3">
        <a href="/send-email" className="text-blue-600">
          Назад
        </a>
      </div>
      <h1 className="text-[32px] font-sf-pro-bold leading-[38px] tracking-tighter">
        Добро пожаловать
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-[96px]">
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Виктор" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="h-[96px]">
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="h-[96px]">
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="h-[96px]">
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem className="h-[96px]">
                <FormLabel>Пол</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Не выбран" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="M">Мужской</SelectItem>
                      <SelectItem value="W">Женский</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="flex mt-auto mb-4" type="submit">
            Создать аккаунт
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
