import { userContext } from "../context/ContextApi";
import AxiosInstance from "../utils/axios/AxiosInstance";

const useExamScorehook = () => {
  const { globaltoken, setexamScore } = userContext();
  const getExamScore = () => {
    AxiosInstance.post("/examScore", {
      data: {
        token: globaltoken,
      },
    })
      .then((res) => {
        setexamScore(res.data.data.studentSemesterWiseMarksDetailsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { getExamScore };
};

export default useExamScorehook;
