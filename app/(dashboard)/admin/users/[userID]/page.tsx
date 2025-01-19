import { prisma } from "@/lib/db";
import { UserForm } from "../../add-user/form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const Page = async ({ params }: { params: { userID: string } }) => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/login");
  }
  //   const id = session.user;
  //   const role = session.user.role;

  //   console.log(role, params.userID, id);

  const admin = await prisma.user.findUnique({
    where: {
      id: params.userID,
    },
  });

  console.log(admin);

  if (admin === null) {
    return <div>No Event found for given ID</div>;
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserForm initialData={admin} />
      </div>
    </div>
  );
};

export default Page;
