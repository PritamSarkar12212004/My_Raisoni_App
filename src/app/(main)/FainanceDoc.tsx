import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadNavigation from "@/src/components/headNavigationForPdf/HeadNavigation";
import useFinanceDownloadHook from "../../hooks/downloadHooks/useFinanceDownloadHook";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import useFainanceFainalDowqnload from "@/src/hooks/downloadHooks/useFainanceFainalDowqnload";

const FinanceItem = ({ item, fuctiuon, loading }: any) => (
  <View
    className="w-full h-52 relative py-4 px-4 flex gap-2 rounded-3xl mb-4"
    style={{
      backgroundColor:
        item.paymentType === "ONLINE_PAYMENT" ? "#DD87B0" : "#9CACFF",
    }}
  >
    <View className="flex-row justify-between">
      <Text className="text-2xl text-zinc-800 font-bold">
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
        <Text className="text-lg text-white">
          Payment: {item.paymentTypeName}
        </Text>
        <Text className="text-lg text-white">Voucher No: {item.voucherNo}</Text>
      </View>
    </View>
    {item.paymentType === "ONLINE_PAYMENT" && (
      <TouchableOpacity
        onPress={() => fuctiuon(item)}
        activeOpacity={0.8}
        className="h-16 w-16 absolute bottom-4 right-4 bg-white rounded-full flex items-center justify-center"
      >
        {loading === item ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Feather name="download-cloud" size={24} color="black" />
        )}
      </TouchableOpacity>
    )}
  </View>
);

const FainanceDoc = () => {
  const { apiCaller } = useFinanceDownloadHook();
  const [data, setData] = useState([]);
  const [data2, setdata2] = useState([]);
  const [loading, setloading] = useState(null);
  const { FainanceDocDownloader } = useFainanceFainalDowqnload();
  const apiCallerDownload = (item: any) => {
    setloading(item);
    FainanceDocDownloader({ item, setloading });
  };

  useEffect(() => {
    apiCaller({ data, setData, setdata2 });
  }, []); // Only runs once on mount

  return (
    <View className="w-full h-full">
      <SafeAreaView className="w-full h-full bg-white">
        <View className="w-full px-2 py-2">
          <HeadNavigation title={"Finance Documents"} />
        </View>

        <View className="w-full flex-1">
          {data.length > 0 || data2.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="w-full flex px-3">
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <FinanceItem
                      item={item}
                      fuctiuon={apiCallerDownload}
                      loading={loading}
                    />
                  )}
                />
              </View>

              <View className="w-full flex px-3 mt-4">
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data2}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <FinanceItem
                      item={item}
                      fuctiuon={apiCallerDownload}
                      loading={loading}
                    />
                  )}
                />
              </View>
            </ScrollView>
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
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FainanceDoc;
