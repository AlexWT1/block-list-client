import { queryClient } from "@/shared/api/query-client";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider( {children}: {children?: ReactNode} ) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
