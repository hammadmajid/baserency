import { Loader2 } from "lucide-react";

export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 20000));

  return (
    <main className="w-1/2 mx-auto text-center">
      <p className="flex items-center justify-center gap-2 text-muted-foreground fill-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Loading</span>
      </p>
    </main>
  );
}
