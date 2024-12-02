"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    alias: "",
    password: "",
  });

  const handleSignIn = (e: any) => {
    e.preventDefault();
    console.log(form);
    router.push("/");
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
      </div>
    </section>
  );
};

export default SignIn;
