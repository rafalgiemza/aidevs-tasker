import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("inprompt");

  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const personName = task.question.split(" ").pop().slice(0, -1);
  // console.log("🚀 ~ Home ~ personName:", personName);

  // const context = task.input.filter((row: string) =>
  //   row.startsWith(personName)
  // );
  // console.log("🚀 ~ Home ~ context:", context);

  // const systemContent = `Answer to the question from userContent, use kwnoledge only from CONTEXT.
  // CONTEXT: ${context}}`;
  // const userContent = task.question;

  // const res1 = await chatCompletion({ systemContent, userContent });
  // const res2 = res1.choices
  //   .map((item) => item.message)
  //   .map((msg) => msg.content);

  // const res3 = res2.at(0);
  // console.log("🚀 ~ Res3:", res3);

  // if (res3) {
  //   const res = await postAnswer(data?.token, res3);
  //   console.log("🚀 ~ file: page.tsx:14 ~ Home ~ res:", res);
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C02L02-eksplorowanie-i-omijanie-ograniczen</h1>
    </main>
  );
}
