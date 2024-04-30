import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInputField from "@/components/CustomInputField";
import { useSignin } from "@/hooks/useLogin";
import { ToastContainer } from "react-toastify";

export default function SignIn() {
  const { signin, isLoading, error } = useSignin();

  const formSchema = z.object({
    email: z.string().email({
      message: "Email not valid",
    }),
    password: z.string({
      message: "Password not valid",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "example@example.com",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await signin(data.email, data.password);
    if (!error) {
      form.reset();
    }
  };

  return (
    <div className="container flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 shadow-lg rounded-xl bg-slate-300 p-52"
        >
          <CustomInputField
            control={form.control}
            name="email"
            label="email"
            type="email"
            placeholder="example@example.com"
          />
          <CustomInputField
            control={form.control}
            name="password"
            label="password"
            type="password"
            placeholder=""
          />
          <Button disabled={isLoading} className="w-full" type="submit">
            Submit
          </Button>
          <ToastContainer />
          {error && <div className="text-red-500 font-semibold">{error}</div>}
        </form>
      </Form>
    </div>
  );
}
