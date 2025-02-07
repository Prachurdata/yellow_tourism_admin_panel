"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { EyeOffIcon, EyeIcon } from "lucide-react";
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
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";

// Zod schema for User creation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" }),
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
  const description = initialData ? "Edit user details" : "Add a new user";
  const toastMessage = initialData ? "User updated." : "User created.";
  const action = initialData ? "Save changes" : "Create User";

  // Default values
  const defaultValues = initialData
    ? {
        name: initialData.name,
        email: initialData.email,
        password: "",
        phone: initialData.phone,
      }
    : {
        name: "",
        email: "",
        password: "",
        phone: "",
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
    <div className="space-y-4">
      <PageHeader title={title} description={description} />
      <Card className="p-6 max-w-2xl mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter full name"
                        {...field}
                        className="h-11 transition-colors focus:ring-2 focus:ring-cyan-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={loading}
                        placeholder="Enter email address"
                        {...field}
                        className="h-11 transition-colors focus:ring-2 focus:ring-cyan-500"
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
                    <FormLabel className="text-sm font-semibold">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        disabled={loading}
                        placeholder="Enter phone number"
                        {...field}
                        className="h-11 transition-colors focus:ring-2 focus:ring-cyan-500"
                      />
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
                    <FormLabel className="text-sm font-semibold">
                      {initialData ? "New Password" : "Password"}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={hidden ? "password" : "text"}
                          disabled={loading}
                          placeholder="Enter password"
                          {...field}
                          className="h-11 pr-10 transition-colors focus:ring-2 focus:ring-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => setHidden(!hidden)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {hidden ? (
                            <EyeOffIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                    <p className="text-xs text-gray-500 mt-1">
                      Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number
                    </p>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                disabled={loading}
                variant="outline"
                onClick={() => router.push('/admin/users')}
                className="w-32"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="w-32 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  action
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
