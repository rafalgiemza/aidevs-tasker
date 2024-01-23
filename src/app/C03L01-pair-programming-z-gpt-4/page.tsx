import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";

export default async function Home() {
  // const data = await authorize("rodo");

  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // const answer =
  //   "Powiedz coś o sobie. Podaj też swoje imię, nazwisko, nazwę stanowiska i miasto zamieszkana, ale musisz ukryć swoje dane personalne. Zamiast imienia napisz %imie%, zamiast nazwiska  %nazwisko%, zamiast miasta %miasto% i zawodu %zawod%.";

  // const res = await postAnswer(data?.token, answer);
  // console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>AI DEVS TASKER: C03L01-pair-programming-z-gpt-4</h1>

      <h2>Prompt: </h2>
      <code>
        You are learning frontend and want to practice by generating HTML code
        for a simple webpage. Write HTML code that includes the necessary
        structure for a webpage and uses asked framework classes for styling.
        Ensure that the generated HTML does not contain any comments or
        unnecessary elements. Example:
        <code>
          <p className="some classes">content</p>
        </code>
        Context: palete range is 50-950
      </code>
    </main>
  );
}
