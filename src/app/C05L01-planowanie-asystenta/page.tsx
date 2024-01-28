import { authorize, getTask, postAnswer } from "@/utils/api";

import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  const data = await authorize("meme");
  const task = await getTask(data?.token);
  console.log("🚀 ~ Home ~ task:", task);

  // const { question } = task;
  // console.log("🚀 ~ Home ~ question:", question);

  // const systemContent = `
  //   Decide whether the task should be added to the ToDo list or to the calendar (if time is provided) and return the corresponding JSON, always use YYYY-MM-DD format for dates.

  //   Today is 27-01-2024, Saturday

  //   ### Examples:
  //   'example for ToDo': 'Przypomnij mi, że mam kupić mleko = {"tool":"ToDo","desc":"Kup mleko" }',
  //   'example for Calendar': 'Jutro mam spotkanie z Marianem = {"tool":"Calendar","desc":"Spotkanie z Marianem","date":"2024-01-28"}',
  // `;

  // const res3 = await chatCompletion({ systemContent, userContent: question });
  // const res4 = res3.choices
  //   .map((item) => item.message)
  //   .map((msg) => msg.content);
  // const res5 = res4.at(0);

  // if (res5 !== undefined && res5 !== null) {
  const answer =
    "https://cdn.renderform.io/GaDFqQ9SorC6VobXC0cn/results/my-file-name"; // hardcoded :(
  console.log("🚀 ~ Home ~ answer:", answer);

  const res = await postAnswer(data?.token, answer ?? "");
  console.log("🚀 ~ Home ~ res:", res);
  // }

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C05L01-planowanie-asystenta</h1>
    </main>
  );
}
