"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [hidden, setHidden] = useState(true);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form", data);

    const { email, password } = data;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log({ response });
      if (!response?.error) {
        router.push("/admin");
        router.refresh();
      }

      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Login Successful", response);
      toast.success("Login Successful");
    } catch (error) {
      console.error("Login Failed:", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background ">
      <div className="w-full max-w-md space-y-8  shadow-lg p-10">
        <div className="flex flex-col items-center space-y-4 ">
          {/* <div className="w-[300px] h-[150px] overflow-hidden relative">
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div> */}
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome back Admin
          </h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 width-full "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      className="text-black dark:text-white"
                      placeholder="Enter Username"
                      {...field}
                      type="text"
                    />
                  </FormControl>
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
                    <div className="relative">
                      <Input
                        id="password"
                        className="text-black dark:text-white pr-10"
                        placeholder="Enter Password"
                        {...field}
                        type={hidden ? "password" : "text"}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setHidden(!hidden)}
                      >
                        {hidden ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="hover:scale-110 hover:bg-cyan-700 ml-aut
          w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
