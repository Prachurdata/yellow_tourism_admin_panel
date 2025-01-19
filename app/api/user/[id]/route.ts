import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hash } from "bcrypt";

// PATCH: Update an existing user
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { name, email, password, phone } = body;
    const id = params.id;

    // Check if user exists
    const existinguser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existinguser) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    // Prepare update data
    const updateData = { name, email, phone, password };

    // Only update password if provided
    if (password) {
      updateData.password = await hash(password, 10);
    }

    // Update user
    const updateduser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    return NextResponse.json(updateduser);
  } catch (error) {
    console.error("[user_PATCH]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Check if user exists
    const existinguser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existinguser) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    // Delete user
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "user deleted successfully" });
  } catch (error) {
    console.error("[user_DELETE]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
