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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white dark:bg-gray-850 shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Welcome back Admin
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in to access your dashboard
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 width-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Username</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      className="h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm"
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
                  <FormLabel className="text-sm font-medium">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="password"
                        className="h-11 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm pr-10"
                        placeholder="Enter Password"
                        {...field}
                        type={hidden ? "password" : "text"}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        onClick={() => setHidden(!hidden)}
                      >
                        {hidden ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
