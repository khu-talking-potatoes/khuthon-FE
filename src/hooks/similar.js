import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function createInstanceWithoutAuth() {
  const instance = axios.create({
    baseURL: 'http://localhost:80',
  });
  return instance;
}

export const api = createInstanceWithoutAuth();

export async function postImage(input1, input2) {
  let data = new FormData();
  data.append('sentence1', input1)
  data.append('sentence2', input2)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:80/sentence_length',
    headers: {
    },
    data : data
  };
  const res = await axios.request(config)
  return res
}

export function usePostImage(input) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['post-summary'],
    queryFn: () => postImage(input),
  })
  const similar = Number(data?.similarity.toFixed(2)) * 100
  const length = data?.len2
  const isLoadingSim = isLoading
  const errorSim = error
  return { isLoadingSim, errorSim, similar, length }
}