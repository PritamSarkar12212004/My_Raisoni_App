import AxiosInstance from "../utils/axios/AxiosInstance";
import { userContext } from "../context/ContextApi";
import { useRouter } from "expo-router";

const useMainDataCall = () => {
  const {
    setloader,
    setcastAndReligion,
    setcourseDetails,
    setfatherDetails,
    setidDetails,
    setpersonalInformation,
    setstudentAddress,
    setuserDetails,
    setprofileImage,
    setattendanceDataMain,
  } = userContext();
  const router = useRouter();
  const successFun = async (res) => {
    AxiosInstance.post("/main", {
      data: res.data.data,
    })
      .then((res) => {
        setattendanceDataMain(res.data.data.attandance);
        console.log(res.data.data.attandance);
        setprofileImage(res.data.data.image); // Set Base64 image

        setcastAndReligion(
          res.data.data.castAndReligion ? res.data.data.castAndReligion : null
        );

        setcourseDetails(
          res.data.data.courseDetails ? res.data.data.courseDetails : null
        );
        setfatherDetails(
          res.data.data.fatherDetails ? res.data.data.fatherDetails : null
        );
        setidDetails(res.data.data.idDetails ? res.data.data.idDetails : null);
        setpersonalInformation(
          res.data.data.personalInformation
            ? res.data.data.personalInformation
            : null
        );
        setstudentAddress(
          res.data.data.studentAddress ? res.data.data.studentAddress : null
        );
        setuserDetails(
          res.data.data.userDetails ? res.data.data.userDetails : null
        );
        setloader(false);
        router.replace("/(main)");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        router.replace("/(helper)/TryAginPage");
      });
  };
  return { successFun };
};

export default useMainDataCall;
