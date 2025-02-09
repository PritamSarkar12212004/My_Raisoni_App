import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import useStudentFeesCall from "@/src/hooks/useStudentFeesCall";
import PaiChart3 from "@/src/components/Paichart/PaiChart3";
import { userContext } from "@/src/context/ContextApi";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";

const Fainance = () => {
  const { ApiStudentFeesCall } = useStudentFeesCall();
  const { feesDetails } = userContext();
  feesDetails && console.log(feesDetails[0].studAcademicFeesDtlsList);
  useEffect(() => {
    ApiStudentFeesCall();
  }, []);
  return (
    <ScrollView className="h-full w-full bg-white">
      {feesDetails ? (
        <View className="w-full h-full gap-5 py-5  ">
          <View className="w-full gap-12 py-6  bg-zinc-100 pb-10   items-center justify-between px-3">
            <View className="flex items-center flex-row justify-center gap-5">
              <View className="flex gap-2 items-center justify-center">
                <PaiChart3
                  init={200}
                  fainal={400}
                  init={
                    feesDetails[0].studentFeeTotalAmtDtls.totalReceivableAmt
                  }
                  fainal={
                    feesDetails[0].studentFeeTotalAmtDtls.totalCollectedAmt
                  }
                  paymentStatus={
                    feesDetails[0].studAcademicFeesDtlsList[0].paymentStatus
                  }
                />
                <Text className="text-xl  font-semibold">
                  {feesDetails[0].academicYearName}
                </Text>
              </View>
              <View className="flex bg-[#007cb9] rounded-r-[30px] px-10 py-6 items-center gap-2 justify-center">
                <View className="flex items-center justify-center">
                  <Text className="text-xl font-bold text-white">
                    Total Amount:
                  </Text>
                  <Text className="text-lg text-white font-semibold">
                    ₹ {feesDetails[0].studentFeeTotalAmtDtls.totalReceivableAmt}
                  </Text>
                </View>
                <View className="flex items-center justify-center">
                  <Text className="text-xl font-bold text-white">
                    Paid Amount:
                  </Text>
                  <Text className="text-lg text-white font-semibold">
                    ₹ {feesDetails[0].studentFeeTotalAmtDtls.totalCollectedAmt}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex items-center flex-row justify-center gap-5">
              <View className="flex gap-2 items-center justify-center">
                <PaiChart3
                  init={200}
                  fainal={400}
                  init={
                    feesDetails[1].studentFeeTotalAmtDtls.totalReceivableAmt
                  }
                  fainal={
                    feesDetails[1].studentFeeTotalAmtDtls.totalCollectedAmt
                  }
                  paymentStatus={
                    feesDetails[1].studAcademicFeesDtlsList[1].paymentStatus
                  }
                />
                <Text className="text-xl  font-semibold">
                  ₹ {feesDetails[1].academicYearName}
                </Text>
              </View>
              <View className="flex bg-[#007cb9] rounded-r-[30px] px-10 py-6 items-center gap-2 justify-center">
                <View className="flex items-center justify-center">
                  <Text className="text-xl font-bold text-white">
                    Total Amount:
                  </Text>
                  <Text className="text-lg text-white font-semibold">
                    ₹ {feesDetails[1].studentFeeTotalAmtDtls.totalReceivableAmt}
                  </Text>
                </View>
                <View className="flex items-center justify-center">
                  <Text className="text-xl font-bold text-white">
                    Paid Amount:
                  </Text>
                  <Text className="text-lg text-white font-semibold">
                    ₹ {feesDetails[1].studentFeeTotalAmtDtls.totalCollectedAmt}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full rounded-t-[40px] relative bg-white top-[-50] px-3 pt-10">
            <View className="w-full">
              <View>
                <View className="w-full flex items-center justify-between flex-row">
                  <Text className="text-2xl text-[#2772db] underline">
                    Payment Detiles
                  </Text>
                </View>
                <View className="w-full border-b-[1px ]">
                  <View className="w-full items-center justify-center flex">
                    <Text className="text-2xl font-semibold mt-10">
                      {feesDetails[0].academicYearName}
                    </Text>
                  </View>
                  {feesDetails[0].studAcademicFeesDtlsList.map(
                    (item, index) => {
                      return (
                        <View
                          key={index}
                          className="w-full mt-1  px-2 py-3 rounded-3xl flex"
                        >
                          <View className="w-full">
                            <Text className="text-lg font-bold">
                              {item.feesHeadName}
                            </Text>
                          </View>
                          <View className="w-full mt-2 bg-zinc-50 py-3 px-3  flex items-center justify-between flex-row">
                            <Text className="text-lg font-semibold text-blue-500">
                              {" "}
                              Total{" "}
                              <Text className="text-blue-500 font-semibold">
                                ₹ {item.totalReceivablesAmt}
                              </Text>
                            </Text>
                            <Text className="text-lg text-green-500 font-semibold">
                              {" "}
                              Paid ₹ {item.totalCollectedAmt}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
                <View className="w-full">
                  <View className="w-full items-center justify-center flex">
                    <Text className="text-2xl font-semibold mt-10">
                      {feesDetails[1].academicYearName}
                    </Text>
                  </View>
                  {feesDetails[1].studAcademicFeesDtlsList.map(
                    (item, index) => {
                      return (
                        <View
                          key={index}
                          className="w-full mt-1  px-2 py-3 rounded-3xl flex"
                        >
                          <View className="w-full">
                            <Text className="text-lg font-bold">
                              {item.feesHeadName}
                            </Text>
                          </View>
                          <View className="w-full mt-2 bg-zinc-50 py-3 px-3  flex items-center justify-between flex-row">
                            <Text className="text-lg font-semibold text-blue-500">
                              {" "}
                              Total{" "}
                              <Text className="text-blue-500 font-semibold">
                                ₹ {item.totalReceivablesAmt}
                              </Text>
                            </Text>
                            <Text className="text-lg text-green-500 font-semibold">
                              {" "}
                              Paid ₹ {item.totalCollectedAmt}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View className="w-full h-full flex items-center justify-center">
          <LottiAnimation
            path={Animation.Money}
            color={"white"}
            width={300}
            height={300}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Fainance;
