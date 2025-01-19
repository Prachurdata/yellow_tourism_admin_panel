"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/theme-toggle";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/admin`,
      label: "Overview",
      active: pathname === `/admin`,
    },
    {
      href: `/admin/users`,
      label: "Users",
      active: pathname === `/admin/users`,
    },
    {
      href: `/admin/flight-bookings`,
      label: "Flight Bookings",
      active: pathname === `/admin/flight-bookings`,
    },
    {
      href: `/admin/hotel-bookings`,
      label: "Hotel Bookings",
      active: pathname === `/admin/hotel-bookings`,
    },
  ];

  return (
    <div className="flex items-center justify-between w-full">
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        {...props}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-primary",
              route.active ? "font-bold" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="flex space-x-3">
        <ModeToggle />
        <Button
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          variant="default"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
