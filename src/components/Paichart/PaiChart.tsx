import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart = ({ init, fainal }: any) => {
  const pieData = [
    { value: init - fainal, color: "black" },
    { value: fainal, color: "#16C47F" },
  ];

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <PieChart
        data={pieData}
        donut
        radius={50}
        innerRadius={40}
        showGradient
        showTooltip
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center  ">
              <Text className="text-3xl">{fainal}%</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart;
