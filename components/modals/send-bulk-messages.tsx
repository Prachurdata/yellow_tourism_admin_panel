"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const formSchema = z.object({
  template: z.string(),
});

export const SendBulkMessageModal = () => {

  const templates = ["hello_world"];

  const { isOpen, onClose, type, data } = useModal();

  const header = {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_WHATSAPP_TOKEN,
      Accept: "application/json",
    },
  };

  const isModalOpen = isOpen && type === "sendBulkMessage";
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      template: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
  if (values.template.toLowerCase() !== "hello_world") {
    for (const row of data.template) {
      try {
        const body = {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: row.original?.phone,
          type: "template",
          template: {
            name: values.template.toLowerCase(),
            language: {
              code: "hi",
            },
          },
        };

        await axios.post(
          "https://graph.facebook.com/v20.0/177309328798172/messages",
          body,
          header
        );
        toast.success("Message sent successfully");
      } catch (error) {
        console.log(error);
        toast.error(`Error in sending message to ${row.original?.phone}`);

        continue; // This will skip the current iteration and move to the next one
      }
    }
  } else {
    for (const row of data.template) {
      try {
        const body = {
          messaging_product: "whatsapp",
          to: row.original?.phone,
          type: "template",
          template: {
            name: "payment_confirmation",
            language: { code: "en" },
          },
        };

        await axios.post(
          "https://graph.facebook.com/v20.0/177309328798172/messages",
          body,
          header
        );
        toast.success("Message sent successfully");

      } catch (error) {
        toast.error(`Error in sending message to ${row.original?.phone}`);
        console.log(error);
        continue; // This will skip the current iteration and move to the next one
      }
    }
  }

  form.reset();
  onClose();
} catch (error) {
  console.log(error);
}
}

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Select a template to send bulk messages
          </DialogTitle>
        </DialogHeader>
        <ScrollArea>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">
                <FormField
                  control={form.control}
                  name="template"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Templates
                      </FormLabel>
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                            <SelectValue placeholder="Select Template" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="overflow-y-auto max-h-[20rem]">
                          {Object.values(templates).map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="capitalize"
                            >
                              {type.toLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className={cn("hiden")}></div>
              </div>
              <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button variant="default" disabled={isLoading}>
                  Send
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
