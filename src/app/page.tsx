import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-12">
      <Link href={"/C01L01-helloapi"}>C01L01-helloapi</Link>
      <Link href={"/C01L04-blogger"}>C01L04-blogger</Link>
      <Link href={"/C01L04-moderation"}>C01L04-moderation</Link>
      <Link href={"/C01L05-prompt-engineering"}>C01L05-prompt-engineering</Link>
      <Link href={"/C02L02-eksplorowanie-i-omijanie-ograniczen"}>
        C02L02-eksplorowanie-i-omijanie-ograniczen
      </Link>
      <Link href={"/C02L03-techniki-pracy-z-gpt-3-5-gpt-4"}>
        C02L03-techniki-pracy-z-gpt-3-5-gpt-4
      </Link>
      <Link href={"/C02L04-praca-z-wlasnymi-danymi"}>
        C02L04-praca-z-wlasnymi-danymi
      </Link>
      <Link href={"/C02L05-llm-poslugujacy-sie-narzedziami"}>
        C02L05-llm-poslugujacy-sie-narzedziami
      </Link>
    </main>
  );
}
