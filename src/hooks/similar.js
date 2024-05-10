import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function createInstanceWithoutAuth() {
  const instance = axios.create({
    baseURL: 'http://localhost:80',
  });
  return instance;
}

export const api = createInstanceWithoutAuth();

export async function postImage(input) {
  const request = { data : input}
  const response = await api.post(`/sentence_length`, request);
  return response.data;
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