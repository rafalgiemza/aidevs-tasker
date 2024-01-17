import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import { embeddings } from "@/utils/openAi";

export default async function Home() {
  // const data = await authorize("embedding");

  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const res1 = await embeddings("Hawaiian pizza");
  // console.log("🚀 ~ Home ~ res1:", res1);

  // const res = await postAnswer(data?.token, res1.data[0].embedding);
  // console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C02L03-techniki-pracy-z-gpt-3-5-gpt-4</h1>
      <h2>embedding, structure</h2>

      <a href="https://zadania.aidevs.pl/chat/structure">
        https://zadania.aidevs.pl/chat/structure
      </a>
      <code>
        In given prompt find category ( pralka/telewizor/zmywarka), producent
        name (e.g. Whirpool) and expected action (zwrot/naprawa). Return answer
        in JSON format. IF you now current date, then fill data field.
        ---examples
        "kategoria\":\"pralka\",\"producent\":\"Whirpool\",\"akcja\":\"zwrot\",data\":\"20240117\"
      </code>
    </main>
  );
}
