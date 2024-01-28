// import { authorize, getTask, postAnswer } from "@/utils/api";
// import { friendsShort } from "./friends";

export default async function Home() {
  // const data = await authorize("optimaldb");
  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const answer = JSON.stringify(friendsShort);
  // console.log("🚀 ~ Home ~ answer:", answer);

  // const res = await postAnswer(data?.token, answer ?? "");
  // console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C05L01-planowanie-asystenta</h1>
    </main>
  );
}
