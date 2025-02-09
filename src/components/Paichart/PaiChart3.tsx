import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart3 = ({ init, fainal, paymentStatus }: any) => {
  const excactValue = init - fainal;
  const pieData = [
    { value: init, color: "#0085FF" },
    { value: excactValue, color: "#f95959" },
  ];

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <PieChart
        data={pieData}
        donut
        radius={80}
        innerRadius={40}
        shadowWidth={10}
        showGradient
        showTooltip
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center  ">
              <Text className="text-black text-lg ">{init}</Text>
              <Text className="text-black text-sm ">{paymentStatus}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart3;
