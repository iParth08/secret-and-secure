"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <section>
      <h1>Welcome to Home</h1>
      <Navbar />
      <div id="login&register">{/* login & register code */}</div>
      <Button
        onClick={() => {
          router.push("chatroom/abc-group");
        }}
      >
        {" "}
        GO to NEXT
      </Button>
    </section>
  );
}
