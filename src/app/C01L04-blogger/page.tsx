import { authorize, getTask, postAnswer } from "@/utils/api";
import { chatCompletion } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("blogger");
  // const task = await getTask(data?.token);
  // console.log("🚀 ~ file: page.tsx:7 ~ Home ~ task:", task);

  // const blog: string[] = task.blog;

  // const resArr: any[] = [];
  // for (let step = 0; step < blog.length; step++) {
  //   const res1 = await chatCompletion({
  //     systemContent:
  //       "You are a helpful assistant. Input is a heading for a part of blog post. Return 2 paragraphs long answer.",
  //     userContent: blog[step],
  //   });
  //   console.log("🚀 ~ file: page.tsx:22 ~ Home ~ res1:", res1.usage);
  //   const m1 = res1.choices.map((choice) => choice.message.content);
  //   resArr.push(m1[0]);
  // }
  // console.log("🚀 ~ file: page.tsx:24 ~ Home ~ resArr:", resArr);

  // const res = await postAnswer(data?.token, resArr);
  // console.log("🚀 ~ file: page.tsx:14 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C01L04 blogger</h1>
    </main>
  );
}
