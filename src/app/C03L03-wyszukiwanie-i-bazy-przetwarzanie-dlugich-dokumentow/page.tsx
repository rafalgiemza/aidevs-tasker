import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import { chatCompletion } from "@/utils/openAi";

const oneMore = "one more hint, please";

// async function getAnswer(hints: string[]) {
//   const data = await authorize("whoami");

//   const task = await getTask(data?.token);
//   console.log("🚀 ~ Home ~ task:", task);

//   const { hint } = task;
//   hints.push(hint);

//   const userContent = `hints: ${hints.toString()}`;

//   const systemContent = `
//   Hi, let's play a game.
//   I'll give you a hint and you need to guess who I'm talking about.
//   The answer is just a concrete person.
//   If you don't know the answer yet, return 'one more hint, please'.
//   Return just answer and nothing more.
//   `;

//   const res1 = await chatCompletion({ systemContent, userContent });
//   const res2 = res1.choices
//     .map((item) => item.message)
//     .map((msg) => msg.content);
//   console.log("🚀 ~ Home ~ res2:", res2);

//   const result = res2.at(0);
//   console.log("🚀 ~ getAnswer ~ result:", result);
//   return { data, result };
// }

export default async function Home() {
  //   const hints: string[] = [];
  //   let exitNow = false;
  //   let dataWithToken = null;
  //   let finalResult = "";

  //   while (exitNow === false) {
  //     const { data, result } = await getAnswer(hints);
  //     if (result !== oneMore) {
  //       dataWithToken = data;
  //       finalResult = result ?? "";
  //       exitNow = true;
  //     }
  //   }
  //   console.log("🚀 ~ Home ~ finalResult:", finalResult);

  //   const res = await postAnswer(dataWithToken?.token, finalResult ?? "");
  //   console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>
        AI DEVS TASKER:
        C03L03-wyszukiwanie-i-bazy-przetwarzanie-dlugich-dokumentow
      </h1>
    </main>
  );
}
