import { authorize, getTask, postAnswer } from "@/utils/api";

import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  const data = await authorize("tools");
  const task = await getTask(data?.token);
  console.log("🚀 ~ Home ~ task:", task);

  // const { question } = task;
  // console.log("🚀 ~ Home ~ question:", question);

  // const systemContent = `
  //   na podstawie podanego pytania zwróć json
  //   jeśli pytanie dotyczy kursu walut (np dolara) to zwróć {category: 'currency', value: 'USD'}
  //   jeśli pytanie dotyczy populacji (np Polski) to zwróć {category: 'population', country: 'Poland'}
  //   w pozostałych przypadkach odpowiedz na pytanie zwróć {category: 'general', answer: 'Twoja odpowiedź'}
  // `;

  // const res3 = await chatCompletion({ systemContent, userContent: question });
  // const res4 = res3.choices
  //   .map((item) => item.message)
  //   .map((msg) => msg.content);
  // const res5 = res4.at(0);
  // console.log("🚀 ~ Home ~ res5:", res5);

  // if (res5 !== undefined && res5 !== null) {
  //   const parsed = await JSON.parse(res5);
  //   console.log("🚀 ~ Home ~ parsed:", parsed);
  //   const { category } = parsed;
  //   console.log("🚀 ~ Home ~ category:", category);

  //   let secondResponse = "";
  //   if (category === "currency") {
  //     secondResponse = await getCurrencyValue(parsed.value);
  //   }
  //   if (category === "population") {
  //     secondResponse = await getPopulation(parsed.country);
  //   }
  //   if (category === "general") {
  //     secondResponse = parsed.answer;
  //   }

  //   const answer = secondResponse;
  //   console.log("🚀 ~ Home ~ secondResponse:", secondResponse);
  //   console.log("🚀 ~ Home ~ answer:", answer);

  //   const res = await postAnswer(data?.token, answer ?? "");
  //   console.log("🚀 ~ Home ~ res:", res);
  // }

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C04L02-automatyzacje-z-ai</h1>
    </main>
  );
}
