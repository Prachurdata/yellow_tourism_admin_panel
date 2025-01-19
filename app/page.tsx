import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Test = async () => {
  const session = await getServerSession();
  console.log("session", session);
  if (session) {
    return redirect("/admin");
  }
  return redirect("/login");
};

export default Test;
