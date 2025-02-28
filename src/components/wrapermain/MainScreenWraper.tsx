import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { userContext } from "@/src/context/ContextApi";

const MainScreenWraper = ({ children }: any) => {
  const { isModalVisible, setModalVisible, userDetails, profileImage } =
    userContext();
  const togalButton = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="w-full h-full flex pt-3 bg-[#21242C] ">
      <SafeAreaView className="px-3 ">
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            avoidKeyboard={false}
            animationIn={"fadeIn"}
            animationOut={"fadeOut"}
            onBackButtonPress={togalButton}
            onBackdropPress={togalButton}
          >
            <View className="w-full py-10 flex items-center gap-5 rounded-3xl   bg-white p-5  ">
              <View className="w-full flex items-center justify-center">
                <Image
                  source={{
                    uri: profileImage,
                  }}
                  className="h-32 w-32 rounded-full"
                />
              </View>
              <View className="w-full flex items-center justify-center">
                <Text className="text-xl font-bold ">Pritam Sarkar</Text>
                <View className="mt-3">
                  <Text className="font-semibold text-lg">
                    Reg No : {userDetails.registrationNumber}
                  </Text>
                  <Text className="font-semibold text-lg">
                    Roll No : {userDetails.rollNumber}
                  </Text>
                </View>
              </View>
              <View className="w-full flex-row items-center justify-between">
                <TouchableOpacity className="h-14 w-[45%] border-[1px] border-[#336DF6] rounded-2xl flex-row items-center justify-center gap-3">
                  <AntDesign name="sharealt" size={24} color="#336DF6" />
                  <Text className="text-xl font-semibold text-[#336DF6]">
                    Share
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-14 w-[45%] bg-[#336DF6] rounded-2xl flex-row items-center justify-center gap-3"
                  activeOpacity={0.8}
                  onPress={() => togalButton()}
                >
                  <Text className="text-xl font-semibold text-white">
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainScreenWraper;
