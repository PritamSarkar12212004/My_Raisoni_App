import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  const [loader, setloader] = useState(false);

  const [id, setid] = useState("");
  const [pass, setpass] = useState("");

  // store detiles
  const [castAndReligion, setcastAndReligion] = useState(null);
  const [courseDetails, setcourseDetails] = useState(null);
  const [fatherDetails, setfatherDetails] = useState(null);
  const [idDetails, setidDetails] = useState(null);
  const [motherDetails, setmotherDetails] = useState(null);
  const [personalInformation, setpersonalInformation] = useState(null);
  const [studentAddress, setstudentAddress] = useState(null);
  const [userDetails, setuserDetails] = useState(null);

  // global token
  const [globaltoken, setglobaltoken] = useState(null);
  const [globaluid, setglobaluid] = useState(null);

  // userData
  const [userData, setuserData] = useState(null);

  // attendance Section
  const [attendance, setattendance] = useState(null);

  // titme table section
  const [timetable, settimetable] = useState(null);

  // const weekDitiles
  const [weekDetails, setweekDetails] = useState(null);

  // fees Detiles
  const [feesDetails, setfeesDetails] = useState(null);

  // headerName
  const [headerName, setheaderName] = useState("Home");

  // profile image
  const [profileImage, setprofileImage] = useState(null);

  const [attendanceDataMain, setattendanceDataMain] = useState(null);

  const [pdfValue, setpdfValue] = useState(null);
  const [maincardValue, setmaincardValue] = useState(null);
  const [imagecardValue, setimagecardValue] = useState(null);

  // modal
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Context.Provider
      value={{
        profileImage,
        setprofileImage,
        id,
        setid,
        pass,
        setpass,
        loader,
        setloader,
        userData,
        setuserData,
        castAndReligion,
        setcastAndReligion,
        courseDetails,
        setcourseDetails,
        fatherDetails,
        setfatherDetails,
        idDetails,
        setidDetails,
        motherDetails,
        setmotherDetails,
        personalInformation,
        setpersonalInformation,
        studentAddress,
        setstudentAddress,
        userDetails,
        setuserDetails,
        globaltoken,
        setglobaltoken,
        globaluid,
        setglobaluid,
        attendance,
        setattendance,
        timetable,
        settimetable,
        weekDetails,
        setweekDetails,
        feesDetails,
        setfeesDetails,
        headerName,
        setheaderName,
        attendanceDataMain,
        setattendanceDataMain,
        pdfValue,
        setpdfValue,
        maincardValue,
        setmaincardValue,
        imagecardValue,
        setimagecardValue,
        isModalVisible,
        setModalVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
