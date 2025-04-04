import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "./form";
export default async function LoginPage() {
  const session = await getServerSession();
  console.log({ session });

  if (session) {
    redirect("/admin");
  }

  return (
      <LoginForm />
  );
}