import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import useStudentFeesCall from "@/src/hooks/useStudentFeesCall";
import PaiChart3 from "@/src/components/Paichart/PaiChart3";
import { userContext } from "@/src/context/ContextApi";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import FaianceMainCard from "@/src/components/card/main/FaianceMainCard";
import FainanceSubCard from "@/src/components/card/main/FainanceSubCard";

const Fainance = () => {
  const { ApiStudentFeesCall } = useStudentFeesCall();
  const { feesDetails } = userContext();
  useEffect(() => {
    ApiStudentFeesCall();
  }, []);
  return (
    <SubPageWraper>
      <NotificationHeader title={"Finance"} />
      <ScrollView className=" w-full" showsVerticalScrollIndicator={false}>
        {feesDetails ? (
          <View className="w-full flex mb-40">
            <View className="w-full flex items-center justify-center gap-10">
              <View>
                <FaianceMainCard data={feesDetails[0]} />
                <FainanceSubCard
                  data={feesDetails[0].studAcademicFeesDtlsList}
                />
              </View>
              <View>
                <FaianceMainCard data={feesDetails[1]} />
                <FainanceSubCard
                  data={feesDetails[1].studAcademicFeesDtlsList}
                />
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
    </SubPageWraper>
  );
};

export default Fainance;
