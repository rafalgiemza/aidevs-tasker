import { AI_DEVS_KEY, API_HOST } from "./variables";

export async function authorize(taskName = "HelloAPI") {
  const response = await fetch(`${API_HOST}/token/${taskName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apikey: AI_DEVS_KEY,
    }),
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

export async function getTask(token: string) {
  const response = await fetch(`${API_HOST}/task/${token}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

export async function postAnswer(
  token: string,
  answer: string | Object | any[]
) {
  const response = await fetch(`${API_HOST}/answer/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      answer: answer,
    }),
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

export async function postFormDataToTaskEndpoint(
  token: string,
  formData: FormData
) {
  const response = await fetch(`${API_HOST}/task/${token}`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}
