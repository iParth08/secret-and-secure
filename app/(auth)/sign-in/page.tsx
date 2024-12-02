"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    alias: "",
    password: "",
  });

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(form);
    toast("Sign up successful!");
    router.push("/users/testUser"); //todo: change this
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <div className="w-[400px]">
        <form action="post" className="flex flex-col gap-5">
          <input
            className="p-2 hover:bg-slate-900 hover:text-white border border-slate-600 rounded-md"
            type="text"
            placeholder="Alias or Username"
            value={form.alias}
            onChange={(e) => setForm({ ...form, alias: e.target.value })}
            required
          />
          <input
            className="p-2 hover:bg-slate-900 hover:text-white border border-slate-600 rounded-md"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <Button onClick={handleSignIn}>Sign In</Button>
        </form>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
