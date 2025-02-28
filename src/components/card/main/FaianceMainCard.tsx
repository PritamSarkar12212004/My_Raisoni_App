import { View, Text } from "react-native";
import React from "react";

const FaianceMainCard = ({ data }: any) => {
  return (
    <View className="w-full flex-row items-center justify-center bg-white/20 rounded-3xl py-5 px-5">
      <View className="w-full flex-row items-center justify-between mt-1">
        <View>
          <Text className="text-zinc-300  font-semibold">
            {data.academicYearName}
          </Text>
          <Text className="text-3xl font-bold text-white ">
            ₹{data.studentFeeTotalAmtDtls.totalReceivableAmt}
          </Text>
        </View>
        <View className="flex">
          <Text className="text-lg text-white font-bold ">Collected</Text>
          <Text className="text-2xl text-green-500 font-semibold">
            ₹{data.studentFeeTotalAmtDtls.totalCollectedAmt}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FaianceMainCard;
