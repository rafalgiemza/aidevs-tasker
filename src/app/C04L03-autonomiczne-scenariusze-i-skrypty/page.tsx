import { authorize, getTask, postAnswer } from "@/utils/api";

import { gpt4v } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("gnome");
  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const { msg, url } = task;
  // console.log("🚀 ~ Home ~ msg, url:", msg, url);

  // const res3 = await gpt4v({ question: msg, url });
  // const res4 = res3.choices.at(0);

  // if (res4 !== undefined) {
  //   const answer = res4.message.content;
  //   console.log("🚀 ~ Home ~ answer:", answer);

  //   const res = await postAnswer(data?.token, answer ?? "");
  //   console.log("🚀 ~ Home ~ res:", res);
  // }

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C04L03-autonomiczne-scenariusze-i-skrypty</h1>
    </main>
  );
}
