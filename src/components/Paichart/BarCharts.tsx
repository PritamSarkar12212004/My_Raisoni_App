import { View, Text } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const BarCharts = ({ data }: any) => {
  const bardata2 = data.map((item: any) => {
    return {
      value: Math.floor(
        (item.attendanceCourseComponentNameInfoList[0].numberOfPresent /
          item.attendanceCourseComponentNameInfoList[0].numberOfPeriods) *
          100
      ),
      label: item.courseName,
      frontColor: "#177AD5",
    };
  });

  return (
    <BarChart
      barWidth={22}
      noOfSections={10}
      barBorderRadius={4}
      frontColor="#177AD5"
      data={bardata2}
      yAxisThickness={0}
      yAxisTextStyle={{ color: "#fff" }}
      xAxisLabelTextStyle={{ color: "#fff" }}
    />
  );
};

export default BarCharts;
