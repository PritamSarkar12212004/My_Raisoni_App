import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useMainDataCall from "@/src/hooks/useMainDataCall";
import { userContext } from "@/src/context/ContextApi";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import useCommanCall from "@/src/hooks/useCommanCall";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useResetHook from "@/src/hooks/helper/useResetHook";

const index = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoader, setResetLoader] = useState(false);
  const [resetError, setResetError] = useState(false);
  const { reseter } = useResetHook();
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close(); // Close the bottom sheet
  };
  const mainReseter = () => {
    if (resetEmail == null || resetEmail == "") {
      setResetError(true);
    } else {
      setResetLoader(true);
      reseter({ email: resetEmail, setResetLoader, closeBottomSheet });
    }
  };
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Callbacks

  useEffect(() => {
    bottomSheetRef.current?.close(); // Close the bottom sheet
  }, []);
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet
  };

  const { id, setid, pass, setpass, loader } = userContext();
  const { AuthKeyFinder } = useCommanCall();
  const { successFun } = useMainDataCall();
  const [numberError, setNumberError] = useState(true);
  const [PassError, setPassError] = useState(true);
  const logar = () => {
    if (id === "") {
      setNumberError(false);
    } else if (pass === "") {
      setPassError(false);
    } else {
      AuthKeyFinder({ id, pass, apiCall: successFun });
    }
  };

  const idInput = (id) => {
    setNumberError(true);
    setid(id);
  };

  const passInput = (pass) => {
    setPassError(true);
    setpass(pass);
  };
  useEffect(() => {
    const passIdFinder = async () => {
      const passAuth = await AsyncStorage.getItem("userPass");
      const idAuth = await AsyncStorage.getItem("userId");
      setpass(JSON.parse(passAuth) ? JSON.parse(passAuth) : "");
      setid(JSON.parse(idAuth) ? JSON.parse(idAuth) : "");
    };
    passIdFinder();
  }, []);
  return (
    <View className="w-full h-full bg-white">
      <View className="w-full h-full px-4 pb-5">
        <View className="w-full flex-auto pt-10">
          <View className="w-full">
            <Text className="text-5xl font-extrabold leading-tight">
              <Text className=" font-extrabold text-[#7d73e6cc]">S</Text>
              ign in to your
            </Text>
            <Text className="text-5xl font-extrabold">account</Text>
          </View>
          <View className="w-full mt-2">
            <Text className=" font-semibold">
              Access your Account by Registretion Number & Password
            </Text>
          </View>
          <View className="w-full mt-3 relative">
            <View className="absolute top-9 left-3">
              <AntDesign
                name="idcard"
                size={24}
                color={numberError ? "#7c73e6" : "red"}
              />
            </View>
            <TextInput
              value={id ? id : ""}
              onChangeText={(id) => idInput(id)}
              placeholder={id ? id : "Registration Number"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                numberError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
          </View>
          <View className="w-full  relative">
            <View className="absolute top-9 left-3">
              <Feather
                name="unlock"
                size={24}
                color={PassError ? "#7c73e6" : "red"}
              />
            </View>
            <TextInput
              value={pass ? pass : ""}
              onChangeText={(pass) => passInput(pass)}
              placeholder={pass ? pass : "Password"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                PassError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => openBottomSheet()}
              className="w-full flex "
            >
              <Text className="text-right text-[#7c73e6] font-semibold text-sm mt-2">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full mt-14 flex items-center justify-center">
            <LottiAnimation
              height={300}
              width={400}
              color={"white"}
              path={Animation.Lock}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => logar()}
          className={`w-full h-16 bg-[#7c73e6]  flex items-center justify-center rounded-[25px] tracking-widest leading-loose`}
          activeOpacity={0.8}
        >
          {loader ? (
            <View className="w-full flex items-center justify-center">
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : (
            <Text className="text-xl font-bold text-white">Next</Text>
          )}
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Initially closed
        snapPoints={["80%"]} // Snap points
        enablePanDownToClose={true} // Allow pan down to close
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className="w-full h-full flex ">
            <View className="w-full flex pt-10 px-5 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-[#7d73e6cc]">
                Forget Password
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => closeBottomSheet()}
                className="h-10 w-10 rounded-full bg-zinc-400 flex items-center justify-center"
              >
                <Feather name="arrow-down" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View
              className="w-full flex items-center justify-between pb-10 pt-5 px-5"
              style={{ flex: 1 }}
            >
              <View className="w-full relative">
                <View className="absolute top-8 left-3">
                  <MaterialIcons name="email" size={24} color="black" />
                </View>
                <TextInput
                  placeholder="Enter Your Email"
                  keyboardType="email-address"
                  className={`w-full border-[1px] font-semibold rounded-2xl  mt-5 h-14 text-lg pl-12 ${
                    resetError ? "border-red-500" : "border-[#7d73e6cc] "
                  } `}
                  value={resetEmail}
                  onChangeText={(resetEmail) => {
                    setResetError(false);
                    setResetEmail(resetEmail);
                  }}
                />
              </View>
              <LottiAnimation
                path={Animation.Reset}
                height={250}
                width={250}
                color={"white"}
              />
              <View className="w-full flex items-center justify-center px-3">
                <TouchableOpacity
                  onPress={() => (resetLoader ? null : mainReseter())}
                  activeOpacity={0.8}
                  className="w-full flex items-center justify-center h-16 bg-[#7d73e6cc] rounded-3xl"
                >
                  {resetLoader ? (
                    <ActivityIndicator size="large" color="white" />
                  ) : (
                    <Text className="text-white text-xl font-bold">Reset</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
export default index;
