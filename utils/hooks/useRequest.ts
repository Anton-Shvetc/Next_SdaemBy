"use client"
import { useEffect, useState } from "react";
import {
  IHeaderNavData,
  IContacts,
  IListDropdown,
} from "@/utils/interfaces/interfaces";

export const useRequest = (apiUrl: string) => {
  const [data, setData] = useState<
     IListDropdown[] & IHeaderNavData[] & IContacts[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const requestHandler = async () => {
      try {
        const request = await fetch(apiUrl);
        const response = await request.json();
        setLoading(false);
        setData(response);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    requestHandler();
  }, [apiUrl]);

  return {
    data,
    loading,
    error,
  };
};
