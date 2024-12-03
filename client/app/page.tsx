"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-back-screen bg-cover bg-center relative">
      <section className="flex flex-col items-center gap-5 bg-dark bg-opacity-80 p-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl font-bold text-green">Welcome, Client 👋</h1>
          <p className="text-xl text-yellow">
            Message your comrades,{" "}
            <span className="font-bold">confidentially.</span>
          </p>
        </div>
        <div className="flex gap-5">
          <Button
            onClick={() => {
              router.push("/sign-in");
            }}
            variant="outline"
            className="hover:bg-green hover:text-white"
          >
            Dive In
          </Button>
          <Button
            onClick={() => {
              router.push("/sign-up");
            }}
            className="bg-crimson text-white"
          >
            Create Alias
          </Button>
        </div>
      </section>
      <footer className="text-sm text-grey absolute bottom-0">
        Looks can be deceptive, be careful.
      </footer>
    </main>
  );
}
