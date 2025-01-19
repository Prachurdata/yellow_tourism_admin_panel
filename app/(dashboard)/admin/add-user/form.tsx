"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { EyeOffIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

// Zod schema for User creation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
});

// Type for form values
type UserFormValues = z.infer<typeof formSchema>;

// Props interface
interface UserFormProps {
  initialData?: {
    id: string;
    name: string;
    email: string;
    phone: string;
  } | null;
}

export const UserForm: React.FC<UserFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Determine form context
  const title = initialData ? "Edit User" : "Create User";
  const description = initialData ? "Edit User details" : "Add a new User";
  const toastMessage = initialData ? "User updated." : "User created.";
  const action = initialData ? "Save changes" : "Create User";

  // Default values
  const defaultValues = initialData
    ? {
        name: initialData.name,
        email: initialData.email,
        password: "", // Always require password input for security
        phone: initialData.phone,
      }
    : {
        name: "",
        email: "",
        password: "",
      };

  // Form setup
  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Submit handler
  const onSubmit = async (data: UserFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // Update existing User
        await axios.patch(`/api/user/${initialData.id}`, data);
      } else {
        // Create new User
        await axios.post(`/api/user`, data);
      }

      toast.success(toastMessage);
      router.refresh();
      router.push(`/admin/users`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full max-w-xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={loading}
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="phone"
                      disabled={loading}
                      placeholder="Enter Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {initialData ? "New Password" : "Password"}
                  </FormLabel>
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
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* User Phone Field */}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              disabled={loading}
              className="mt-4 w-full md:w-auto"
              type="submit"
            >
              {loading ? "Processing..." : action}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
