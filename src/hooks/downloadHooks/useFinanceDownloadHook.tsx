import { View, Text } from "react-native";
import React from "react";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import { userContext } from "@/src/context/ContextApi";

const useFinanceDownloadHook = () => {
  const { globaltoken } = userContext();

  const apiCaller = ({ data, setData }: any) => {
    AxiosInstance.post("/download/fainanceOne", {
      data: { token: globaltoken },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { apiCaller };
};

export default useFinanceDownloadHook;
