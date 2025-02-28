import { View, Text } from "react-native";
import React from "react";

const FainanceSubCard = ({ data }) => {
  return (
    <View className=" mt-4 flex gap-2">
      {data.map((item, index) => {
        return (
          <View key={index} className="w-full bg-white/10 rounded-3xl p-4 ">
            <View className="w-full"></View>
            <View className="w-full mt-2 flex items-center justify-between flex-row">
              <View>
                <Text className="text-lg font-bold text-white">
                  {item.feesHeadName}
                </Text>
                <Text className="text-lg font-semibold text-blue-500">
                  {" "}
                  Total{" "}
                  <Text className="text-blue-500 font-semibold">
                    ₹{item.totalReceivablesAmt}
                  </Text>
                </Text>
              </View>
              <View>
                <Text className="text-lg  font-semibold text-white">Paid</Text>
                <Text className="text-green-500">
                  {" "}
                  ₹{item.totalCollectedAmt}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FainanceSubCard;
