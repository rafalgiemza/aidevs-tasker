"use server";

import {
  authorize,
  getTask,
  postAnswer,
  postFormDataToTaskEndpoint,
} from "@/utils/api";
import { transcription } from "@/utils/openAi";

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  console.log("🚀 ~ prevState:", prevState);
  console.log("🚀 ~ formData:", formData);

  const data = await authorize("whisper");

  const task = await getTask(data?.token);
  console.log("🚀 ~ Home ~ task:", task);

  const file = formData.get("file");
  console.log("🚀 ~ file:", file);

  if (file) {
    const res1 = await transcription(file as File);
    console.log("🚀 ~ Home ~ res1:", res1);

    const res = await postAnswer(data?.token, res1.text);
    console.log("🚀 ~ Home ~ res:", res);
  }

  return { message: `message` };
}
