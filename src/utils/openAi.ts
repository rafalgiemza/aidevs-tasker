import OpenAI from "openai";
import { OPENAI_AI_DEVS_KEY } from "./variables";

const openai = new OpenAI({
  apiKey: OPENAI_AI_DEVS_KEY,
});

async function moderation(input: string[]) {
  const moderationRes = await openai.moderations.create({
    input,
    model: "text-moderation-latest",
  });
  console.log(
    "🚀 ~ file: openAi.ts:12 ~ moderation ~ moderationRes:",
    moderationRes
  );
  return moderationRes as OpenAI.Moderations.ModerationCreateResponse;
}

async function main(input: string) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: input }],
    model: "gpt-3.5-turbo",
  });
  console.log(
    "🚀 ~ file: openAi.ts:13 ~ main ~ chatCompletion:",
    chatCompletion
  );
}

export { moderation, main };
