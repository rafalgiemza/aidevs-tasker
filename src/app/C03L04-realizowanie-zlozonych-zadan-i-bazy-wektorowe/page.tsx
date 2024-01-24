// import { authorize, getTask, postAnswer } from "@/utils/api";

export default async function Home() {
  // const data = await authorize("search");

  // const task = await getTask(data?.token);
  // console.log("🚀 ~ Home ~ task:", task);

  // TODO:  zaimportuj do swojej bazy wektorowej, spis wszystkich linków z newslettera unknowNews z adresu: https://unknow.news/archiwum.json

  // const answer = `https://www.internet-czas-dzialac.pl/pseudonimizacja-a-anonimizacja/`; // hardcoded :(

  // const res = await postAnswer(data?.token, answer);
  // console.log("🚀 ~ Home ~ res:", res);

  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <h1>
        AI DEVS TASKER: C03L04-realizowanie-zlozonych-zadan-i-bazy-wektorowe
      </h1>
    </main>
  );
}
