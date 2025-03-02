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
import useFinanceDownloadHook from "../../hooks/downloadHooks/useFinanceDownloadHook";
import Feather from "@expo/vector-icons/Feather";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import useFainanceFainalDowqnload from "@/src/hooks/downloadHooks/useFainanceFainalDowqnload";
import SubPageWraper from "@/src/components/wrapermain/SubPageWraper";
import NotificationHeader from "@/src/components/Head/NotificationHeader";

const FinanceItem = ({ item, fuctiuon, loading }: any) => (
  <View
    className="w-full h-52 relative py-4 px-4 flex gap-2 rounded-3xl mb-4"
    style={{
      backgroundColor:
        item.paymentType === "ONLINE_PAYMENT" ? "#474F7A" : "#9CACFF",
    }}
  >
    <View className="flex-row justify-between">
      <Text className="text-2xl text-zinc-200 font-bold">
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
    <SubPageWraper>
      <NotificationHeader title="Fees Receipt" />
      <SafeAreaView className="w-full h-full ">
        <View className="w-full flex-1">
          {data.length > 0 || data2.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="w-full flex ">
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

              <View className="w-full flex mt-4 mb-40">
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
                color={"#21242C"}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </SubPageWraper>
  );
};

export default FainanceDoc;
