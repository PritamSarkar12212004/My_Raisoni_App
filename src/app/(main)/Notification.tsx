import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import MainCard from "@/src/components/card/notificationCard/MainCard";
import SemiCard from "@/src/components/card/notificationCard/SemiCard";
import { LinearGradient } from "expo-linear-gradient";
import ImageCard from "@/src/components/card/notificationCard/ImageCard";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import { useRouter } from "expo-router";

const Notification = () => {
  const router = useRouter();
  const [mainEvent, setMainEvent] = useState(null);
  const [semimainEvent, semisetMainEvent] = useState(null);
  const [smallmainEvent, setsmallmainEvent] = useState(null);
  const mainEventCheker = async () => {
    AxiosInstance.post("/event/main")
      .then((res) => {
        setMainEvent(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const SemimainEventCheker = async () => {
    AxiosInstance.post("/event/semi")
      .then((res) => {
        semisetMainEvent(res.data.data);
      })
      .catch((err) => {
        router.replace("/(helper)/TryAginPage");

        console.log(err);
      });
  };
  const SmallmainEventCheker = async () => {
    AxiosInstance.post("/event/small")
      .then((res) => {
        setsmallmainEvent(res.data.data);
      })
      .catch((err) => {
        router.replace("/(helper)/TryAginPage");
        console.log(err);
      });
  };
  useEffect(() => {
    mainEventCheker();
    SemimainEventCheker();
    SmallmainEventCheker();
  }, []);
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#1E1E2C", "#25253D", "#10101A"]}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View className="w-full h-full">
        <SafeAreaView className="">
          <NotificationHeader />
          {mainEvent && semimainEvent && smallmainEvent ? (
            <ScrollView className="w-full h-full">
              <ScrollView>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="flex w-full flex-row gap-4 mt-10 pl-2"
                >
                  {mainEvent &&
                    mainEvent.map((item, index) => {
                      return <MainCard key={index} item={item} />;
                    })}
                </ScrollView>
              </ScrollView>
              <View className="w-full mt-16 flex items-center justify-center gap-5 mb-5">
                {semimainEvent &&
                  semimainEvent.map((item, index) => {
                    return <ImageCard key={index} item={item} />;
                  })}
              </View>
              <View className="w-full mt-16 flex items-center justify-center gap-5 mb-48">
                {smallmainEvent &&
                  smallmainEvent.map((item, index) => {
                    return <SemiCard key={index} item={item} />;
                  })}
              </View>
            </ScrollView>
          ) : (
            <View className="w-full h-full flex items-center justify-center">
              <LottiAnimation
                path={Animation.noti}
                width={300}
                height={300}
                color={"transparent"}
              />
            </View>
          )}
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
};

export default Notification;
