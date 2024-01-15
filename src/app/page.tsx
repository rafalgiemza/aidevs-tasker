import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-12">
      <Link href={"/C01L01-helloapi"}>C01L01-helloapi</Link>
      <Link href={"/C01L04-blogger"}>C01L04-blogger</Link>
      <Link href={"/C01L04-moderation"}>C01L04-moderation</Link>
      <Link href={"/C01L05-prompt-engineering"}>C01L05-prompt-engineering</Link>
    </main>
  );
}
