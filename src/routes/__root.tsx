import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "@/components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
        <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
