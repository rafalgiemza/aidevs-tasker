import OpenAI from "openai";
import { OPENAI_AI_DEVS_KEY } from "./variables";

const openai = new OpenAI({
  apiKey: OPENAI_AI_DEVS_KEY,
});

interface ChatCompletionProps {
  systemContent: string;
  userContent: string;
}

async function chatCompletion(props: ChatCompletionProps) {
  const chatCompletionResults = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: props.systemContent,
      },
      { role: "user", content: props.userContent },
    ],
    model: "gpt-3.5-turbo",
  });

  return chatCompletionResults as OpenAI.Chat.Completions.ChatCompletion;
}

async function moderation(input: string[]) {
  const moderationResults = await openai.moderations.create({
    input,
    model: "text-moderation-latest",
  });
  return moderationResults as OpenAI.Moderations.ModerationCreateResponse;
}

async function embeddings(input: string) {
  const embeddingsResults = await openai.embeddings.create({
    input,
    model: "text-embedding-ada-002",
  });
  return embeddingsResults as OpenAI.CreateEmbeddingResponse;
}

export { chatCompletion, moderation, embeddings };
