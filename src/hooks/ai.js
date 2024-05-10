import { GoogleGenerativeAI } from '@google/generative-ai';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchSummary = async (link) => {
  const apiKey = import.meta.env.VITE_APP_GPT_API_KEY;
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      model: 'gpt-3.5-turbo-16k',
      messages: [
        {
          role: 'system',
          content:
            'You are helpful assistant. your answer need to be shorter than 500 characters.',
        },
        { role: 'user', content: `${link}` },
      ],
      max_tokens: 4000,
    },
  };
  const response = await axios.request(config)
  return response.data;
};

export const fetchSummary4 = async (link) => {
  const apiKey = import.meta.env.VITE_APP_GPT4_API_KEY;
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are helpful assistant. your answer need to be shorter than 500 characters.',
        },
        { role: 'user', content: `${link}` },
      ],
      max_tokens: 4000,
    },
  };
  const response = await axios.request(config)
  return response.data;
};

export const useGetSummary = (link) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-summary'],
    queryFn: () => fetchSummary(link),
    enabled: !!link,
  });
  console.log(data?.choices?.[0]?.message.content)
  const result = data?.choices?.[0]?.message.content
  return { isLoading, error, result };
};

export const useGetSummary4 = (link) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-summary4'],
    queryFn: () => fetchSummary4(link),
    enabled: !!link,
  });
  console.log(data?.choices?.[0]?.message.content)
  const result4 = data?.choices?.[0]?.message.content
  const isLoading4 = isLoading
  const error4 = error
  return { isLoading4, error4, result4 };
};

export const getAnswerGemini = async (input) => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_KEY)
  const model = genAI.getGenerativeModel({ model:
  "gemini-pro" })
  const result = await model.generateContent(input);
  const response = await result.response
  const text = response.text();
  return text;
}

export const useGetAnswerGemini = (input) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['get-answer-gemini'],
    queryFn: () => getAnswerGemini(input),
    enabled: !!input,
  })
  console.log(data)
  const isLoadingGem = isLoading
  const errorGem = error
  const resultGem = data
  return { isLoadingGem, errorGem, resultGem }
}