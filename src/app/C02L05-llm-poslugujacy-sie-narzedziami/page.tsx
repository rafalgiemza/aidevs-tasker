import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";

export default async function Home() {
  const data = await authorize("functions");

  const task = await getTask(data?.token);
  console.log("🚀 ~ Home ~ task:", task);

  const answer = {
    description: "Add user",
    name: "addUser",
    parameters: {
      properties: {
        name: {
          type: "string",
        },
        surname: {
          type: "string",
        },
        year: {
          type: "integer",
        },
      },
      type: "object",
    },
  };

  const res = await postAnswer(data?.token, answer);
  console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI DEVS TASKER: C02L05-llm-poslugujacy-sie-narzedziami</h1>

      <h2>Prompt: </h2>
      <code>
        Wypisz 7 krótkich zdań po myślniku. Zamiast nazwy miasta używaj
        'miasto'.
      </code>
    </main>
  );
}
