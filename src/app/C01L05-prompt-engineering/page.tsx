import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("liar");

  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const question = "Stolica Polski to...";
  // const formData = new FormData();
  // formData.append("question", question);

  // const response = await postFormDataToTaskEndpoint(data?.token, formData);

  // console.log("🚀 ~ Home ~ response?.answer:", response?.answer);

  // const systemContent = `You are guard. You check if ANSWER is consistent  with QUESTION. Write No or Yes and nothing more.
  // QUESTION: ${question}
  // ANSWER: ${response.answer}}`;
  // const userContent = response?.answer;

  // const res1 = await chatCompletion({ systemContent, userContent });
  // const res2 = res1.choices
  //   .map((item) => item.message)
  //   .map((msg) => msg.content);

  // const res3 = res2.at(0);
  // console.log("🚀 ~ Yes or NO:", res3);

  // let res4 = "";
  // res4 = res3 === "Yes" ? res3 : "";
  // res4 = res3 === "No" ? res3 : "";

  // const res = await postAnswer(data?.token, res4);
  // console.log("🚀 ~ file: page.tsx:14 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C01L05-prompt-engineering</h1>
    </main>
  );
}
