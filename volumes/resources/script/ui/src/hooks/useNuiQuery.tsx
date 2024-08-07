/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchNui } from "../lib/fetchNui";
import { useNuiEvent } from "./useNuiEvent";
import { isEnvBrowser } from "../lib/misc";

interface Input<T> {
  eventName: string;
  shouldAutoFetch?: boolean;
  mock?: T;
  body?: unknown;
}

type Output<T> = [
  T | null,
  (data?: unknown) => void,
  isLoading: boolean
]

export function useNuiQuery<T>({ eventName, shouldAutoFetch, mock, body }: Input<T>): Output<T> {
  const [response, setResponse] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetcher(data?: unknown) {
    if (isEnvBrowser() && mock) return setResponse(mock);
    await fetchNui<T>(eventName, data);
  }

  useNuiEvent(eventName, (responseData: T) => {
    setResponse(responseData);
  });

  useEffect(() => {
    async function firstFetch() {
      if (shouldAutoFetch) {
        setIsLoading(true);
        await fetcher(body);
      }
    }

    firstFetch();
    setIsLoading(false);
  }, [body])

  return [
    response,
    fetcher,
    isLoading
  ];
}