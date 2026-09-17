"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// This creates the central manager/cache for TanStack Query
const queryClient = new QueryClient();

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
