import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoConstant from "@/src/constants/LogoConstant";
import BarCode from "@kichiyaki/react-native-barcode-generator";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { userContext } from "@/src/context/ContextApi";

const screenWidth = Dimensions.get("window").width;

const ICardGenarator = () => {
  const {
    userDetails,
    profileImage,
    personalInformation,
    studentAddress,
    courseDetails,
  } = userContext();

  return (
    <SafeAreaView className="w-full h-full bg-zinc-200">
      <View className="w-full h-full flex-row items-center justify-center px-2">
        <View className="w-[125vw] flex gap-2 items-center justify-between p-5 h-[37vh] bg-white rounded-2xl rotate-90">
          <View className="w-full h-20 flex-row items-center justify-between">
            <View className="h-full flex-row items-center w-full gap-3">
              <View className="h-full">
                <Image
                  source={LogoConstant.RaisoniLogo}
                  className="h-20 w-20"
                />
              </View>
              <View className="h-full flex">
                <Text className="text-2xl font-extrabold text-orange-600">
                  G H RAISNO UNIVERSITY, AMRAVATI
                </Text>
                <View>
                  <Text className="text-sm text-center font-semibold text-gray-700">
                    G H Raisoni, Anjangaon Bari Road, Amravati-444701 (MH)
                  </Text>
                  <Text className="text-sm text-center font-semibold text-gray-700">
                    Tel. : +91-721-2992966 / 67
                  </Text>
                  <Text className="text-xs text-center text-gray-700">
                    Web : https://ghrua.edu.in/amravati/ | E-mail :
                    info.amravati@ghrua.edu.in
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full flex-row gap-5 mt-2">
            <View className="h-full flex">
              <Image source={{ uri: profileImage }} className="h-36 w-28" />
            </View>
            <View className="h-full flex-auto">
              <View>
                <Text className="leading-tight tracking-wider font-semibold">
                  Name : {userDetails.userFirstName} {userDetails.middleName}{" "}
                  {userDetails.lastName}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-semibold tracking-wider leading-tight">
                  DOB :{" "}
                  {new Date(userDetails.dateOfBirth).toLocaleDateString(
                    "en-GB"
                  )}
                </Text>
                <Text className="leading-tight tracking-wider font-semibold">
                  Blood Grp : {personalInformation.bloodGroupName}
                </Text>
              </View>
              <View>
                <Text className="leading-tight tracking-wider font-semibold">
                  Program : {courseDetails.degreeName} ({" "}
                  {courseDetails.degreeName} )
                </Text>
              </View>
              <View>
                <Text className="leading-tight tracking-wider font-semibold">
                  Valid Till : 31/07/2026
                </Text>
              </View>
              <View>
                <Text className="leading-tight tracking-wider font-semibold text-wrap">
                  Address :{" "}
                  <Text className="text-xs tracking-wider ">{studentAddress.address},</Text>
                  <Text className="text-xs tracking-wider ">
                    {studentAddress.districtName},{studentAddress.pincode}
                  </Text>
                </Text>
              </View>
              <View>
                <Text className="leading-tight tracking-wider font-semibold">
                  Phone : {userDetails.mobileNumber}
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full h-20 flex mt-1">
            <Text className="text-red-500  font-semibold">
              {userDetails.registrationNumber}
            </Text>
            <View className="mt-2">
              <BarCode
                value={userDetails.registrationNumber}
                width={screenWidth * 0.0065} // Responsive width based on screen size
                height={hp("3%")} // Responsive height based on screen height
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ICardGenarator;
