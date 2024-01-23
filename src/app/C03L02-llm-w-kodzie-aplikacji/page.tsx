import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import axios from "axios";
import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  const data = await authorize("scraper");

  const task = await getTask(data?.token);
  console.log("🚀 ~ Home ~ task:", task);
  const url: string = task.input;
  const question: string = task.question;

  const response = await axios(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  console.log("🚀 ~ Home ~ response:", response);

  const isStatus200 = response.status === 200;
  console.log("🚀 ~ Home ~ isStatus200:", isStatus200);

  if (isStatus200) {
    console.log("🚀 ~ Home ~ response.data:", response.data);
  }

  const context = response.data;

  const systemContent = `
    Based on given CONTEXT return answer for the QUESTION and nothing more
    CONTEXT: ${context}
    QUESTION: ${question}
  `;

  const res1 = await chatCompletion({ systemContent, userContent: question });
  console.log("🚀 ~ Home ~ res1:", res1);
  const res2 = res1.choices
    .map((item) => item.message)
    .map((msg) => msg.content);
  console.log("🚀 ~ Home ~ res2:", res2);

  const answer = res2.at(0);

  const res = await postAnswer(data?.token, answer ?? "");
  console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C03L01-pair-programming-z-gpt-4</h1>

      <h2>Prompt: </h2>
      <code>
        Jesteś specjalistą od formatowania tekstu podanego przez użytkownika.
        Język ten składa się ze znaczników zapisywanych jako !slowo! i bazuje na
        dziwnych wyrażeniach jednego z afrykańskich plemion. tumba - paragraf
        zabzila - pogrubienie Zwróć wynik w postaci kodu HTML bez nagłówka.
      </code>
    </main>
  );
}
