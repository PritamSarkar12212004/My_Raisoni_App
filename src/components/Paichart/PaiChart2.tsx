import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart2 = ({ init, fainal, title }: any) => {
  const fainalcgpa = init - fainal;
  const pieData = [
    { value: fainalcgpa, color: "black" },
    { value: fainal, color: "#E4B324" },
  ];

  return (
    <View style={{ alignItems: "center", marginVertical: 0 }}>
      <PieChart
        data={pieData}
        radius={60}
        innerRadius={50}
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center ">
              <Text className="text-3xl font-extrabold">{fainal}%</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart2;
