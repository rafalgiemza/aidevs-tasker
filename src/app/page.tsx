import Link from "next/link";

export default async function Home() {
  const links = [
    "C01L01-helloapi",
    "C01L04-blogger",
    "C01L04-moderation",
    "C01L05-prompt-engineering",
    "C02L02-eksplorowanie-i-omijanie-ograniczen",
    "C02L03-techniki-pracy-z-gpt-3-5-gpt-4",
    "C02L04-praca-z-wlasnymi-danymi",
    "C02L05-llm-poslugujacy-sie-narzedziami",
    "C03L01-pair-programming-z-gpt-4",
    "C03L02-llm-w-kodzie-aplikacji",
    "C03L03-wyszukiwanie-i-bazy-przetwarzanie-dlugich-dokumentow",
    "C03L04-realizowanie-zlozonych-zadan-i-bazy-wektorowe",
    "C03L05-produkcyjne-zastosowanie-modeli-openai",
    "C04L01-narzedzia-do-automatyzacji",
    "C04L02-automatyzacje-z-ai",
    "C04L03-autonomiczne-scenariusze-i-skrypty",
    "C05L01-planowanie-asystenta",
    "C05L02-api-asystenta",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-12">
      {links.map((value) => (
        <Link key={value} href={`/${value}`}>
          {value}
        </Link>
      ))}
    </main>
  );
}
