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

interface Gpt4vProps {
  question?: string;
  url?: string;
}

async function gpt4v(props: Gpt4vProps) {
  const {
    question = "What is in this image?",
    url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
  } = props;
  const chatCompletionResults = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: question },
          {
            type: "image_url",
            image_url: {
              url,
            },
          },
        ],
      },
    ],
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

async function transcription(file: File) {
  const transcriptionResults = await openai.audio.transcriptions.create({
    file,
    model: "whisper-1",
    language: "PL",
  });
  return transcriptionResults as OpenAI.Audio.Transcription;
}

export { chatCompletion, gpt4v, moderation, embeddings, transcription };
