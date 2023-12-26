import { authorize, getTask, postAnswer } from "@/utils/api";

export default async function Home() {
  const data = await authorize("HelloAPI");
  const task = await getTask(data?.token);
  const res = await postAnswer(data?.token, task?.cookie);
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: helloapi</h1>
    </main>
  );
}
