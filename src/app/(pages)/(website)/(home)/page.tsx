import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="container flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Welcome to Gadget Flow</h1>
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
