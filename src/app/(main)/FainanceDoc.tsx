import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadNavigation from "@/src/components/headNavigation/HeadNavigation";
import useFinanceDownloadHook from "../../hooks/downloadHooks/useFinanceDownloadHook";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";

const FainanceDoc = () => {
  const { apiCaller } = useFinanceDownloadHook();
  const [data, setData] = useState([]);
  useEffect(() => {
    apiCaller({ data, setData });
  }, []);

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full px-2 py-2">
        <HeadNavigation title={"Finance Documents"} />
      </View>
      {data.length > 0 ? (
        <View className="w-full flex px-3 mb-20">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                className="w-full h-52 relative py-4 px-4 flex gap-2  rounded-3xl mb-4"
                style={{
                  backgroundColor:
                    item.paymentType == "ONLINE_PAYMENT"
                      ? "#DD87B0"
                      : "#9CACFF",
                }}
              >
                <View className="flex-row justify-between">
                  <Text className="text-2xl text-zinc-800 font-bold ">
                    {item.paymentType}
                  </Text>

                  <Text className="text-xl text-zinc-800 font-bold underline">
                    {item.paymentDate}
                  </Text>
                </View>
                <View className="w-full flex-row items-center justify-between">
                  <View>
                    <Text className="text-3xl font-extrabold tracking-widest">
                      Amount: ₹ {item.totalCollectedAmt}
                    </Text>

                    <Text className="text-lg text-white  ">
                      Payment : {item.paymentTypeName}
                    </Text>
                    <Text className="text-lg text-white  ">
                      Voucher No : {item.voucherNo}
                    </Text>
                  </View>
                </View>
                {item.paymentType == "ONLINE_PAYMENT" && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className="h-16 w-16 absolute bottom-4 right-4 bg-white rounded-full flex items-center justify-center"
                  >
                    <Feather name="download-cloud" size={24} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      ) : (
        <View className="w-full h-full flex items-center justify-center">
          <LottiAnimation
            width={300}
            height={300}
            path={Animation.Wallet}
            color={"white"}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default FainanceDoc;
