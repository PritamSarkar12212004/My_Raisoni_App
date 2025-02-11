import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart2 = ({ init, fainal, title }: any) => {
  const fainalcgpa = init - fainal;
  const pieData = [
    { value: fainalcgpa, color: "#F93827" },
    { value: fainal, color: "#008FFF" },
  ];

  return (
    <View style={{ alignItems: "center", marginVertical: 0 }}>
      <PieChart
        data={pieData}
        donut
        radius={90}
        innerRadius={45}
        shadowWidth={10}
        showGradient
        showTooltip
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center ">
              <Text style={{ fontSize: 25 }}>{fainal}</Text>
              <Text className="text-lg font-semibold">{title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart2;
