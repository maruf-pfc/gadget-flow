import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <main className="container flex flex-col min-h-screen py-2">
        <h1 className="text-6xl font-bold">home</h1>
        <Image
          src="/logo.png"
          alt="Gadget Flow Online Shop Logo"
          width={72}
          height={72}
        />
      </main>
    </div>
  );
}
