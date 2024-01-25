import { authorize, getTask, postAnswer } from "@/utils/api";
import { people } from "./people";
import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  const data = await authorize("people");
  const task = await getTask(data?.token);

  const { question } = task;
  console.log("🚀 ~ Home ~ question:", question);

  const systemContent = `
    Z zadanego przez uytkownika pytania wyłuskaj imię i nazwisko w mianowniku osoby o którą pyta.
    Zwróć odpowiedź w formacie JSON
    Przykłady:
    Pytanie: jaki kolor się podoba Mariuszowi Kaczorowi?
    Odpowiedź: { imie: 'Mariusz', nazwisko: 'Kaczor'}
    Pytanie: powiedz mi, gdzie mieszka Katarzyna Truskawka? w jakim mieście?
    Odpowiedź: { imie: 'Katarzyna', nazwisko: 'Truskawka'}
  `;

  const res1 = await chatCompletion({ systemContent, userContent: question });
  const res2 = res1.choices
    .map((item) => item.message)
    .map((msg) => msg.content);
  const obj = res2.at(0);
  console.log("🚀 ~ Home ~ obj:", obj);

  const imie = obj && JSON.parse(obj)?.imie;
  const nazwisko = obj && JSON.parse(obj)?.nazwisko;
  const condition = imie && nazwisko;

  if (!condition) return null;

  interface Person {
    imie: string;
    nazwisko: string;
  }

  const person: Person = JSON.parse(obj);
  console.log("🚀 ~ Home ~ person:", person);

  const limitedContext = people.find((item) => {
    return item.imie === imie && item.nazwisko === nazwisko;
  });
  console.log("🚀 ~ limitedContext ~ limitedContext:", limitedContext);

  const systemContent2 = `
    Using CONTEXT answer for the user question
    COTEXT: ${limitedContext?.o_mnie}
  `;

  const res3 = await chatCompletion({
    systemContent: systemContent2,
    userContent: question,
  });
  const res4 = res3.choices
    .map((item) => item.message)
    .map((msg) => msg.content);

  const answer = res4.at(0);
  console.log("🚀 ~ Home ~ answer:", answer);

  const res = await postAnswer(data?.token, answer ?? "");
  console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C03L05-produkcyjne-zastosowanie-modeli-openai</h1>

      <h1>planets</h1>
      <code>
        WIP
        <code>
          Grecki bóg wojny oraz bogini piękna to nazwy mitologicznych postaci i
          jednocześnie ciał niebieskich. Wypisz wszystkie 9 ciał niebieskich w
          kolejności, zacznij od tej, która jest najbliżej środka. Wynik zwróć w
          postaci tablicy. Poprawny format: ["element1","element2"]. Błędny
          format: ["Element1","Element2"]. Przykład wyniku:
          ["element1","element2"].
        </code>
        ["Merkury", "Wenus", "Ziemia", "Mars", "Jowisz", "Saturn", "Uran",
        "Neptun", "Pluton"] ❌ Nazwy planet muszą być zapisane małymi literami
      </code>
    </main>
  );
}
