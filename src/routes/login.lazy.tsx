"use client";

import { createLazyFileRoute } from "@tanstack/react-router";
import "../Login.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});


const Login = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log(form);
  return (
    <div className="login-container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 login-form">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Introdu numele de utilizator</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
		  <FormField
		  control={form.control}
		  name="password"
		  render={({ field }) => (
			<FormItem>
			  <FormLabel>Introdu parola</FormLabel>
			  <FormControl>
				<Input placeholder="password" {...field} />
			  </FormControl>
			  <FormMessage />
			</FormItem>
		  )} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

export default Login;
