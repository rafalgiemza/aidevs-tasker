import { authorize, getTask, postAnswer } from "@/utils/api";
import { moderation } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("moderation");
  // const task = await getTask(data?.token);

  // const { input: sentences } = task;

  // const res1 = await moderation(sentences);
  // const res2 = res1.results.map((res) => (res.flagged ? 1 : 0));

  // const res = await postAnswer(data?.token, res2);
  // console.log("🚀 ~ file: page.tsx:14 ~ Home ~ res:", res)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C01L04</h1>
    </main>
  );
}
