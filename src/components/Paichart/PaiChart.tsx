import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart = ({ init, fainal }: any) => {
  const pieData = [
    { value: init, color: "#F93827" },
    { value: fainal, color: "#16C47F" },
  ];
  const result = Math.round((fainal / init) * 100);

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <PieChart
        data={pieData}
        donut
        radius={80}
        innerRadius={50}
        shadowWidth={10}
        showGradient
        showTooltip
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center ">
              <Text style={{ fontSize: 30 }}>{result}%</Text>
              <Text className="text-lg font-semibold">Present</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart;
