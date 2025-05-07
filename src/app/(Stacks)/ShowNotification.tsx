import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { userContext } from "@/src/context/ContextApi";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import ImageViewing from "@/src/components/ImageViewing";

interface MainCardValue {
  images?: string[];
  title?: string;
  description?: string;
  pdf?: string;
  start_date?: string;
  end_date?: string;
}

const ShowNotification = () => {
  const { maincardValue } = userContext() as {
    maincardValue: MainCardValue | null;
  };

  const images = maincardValue?.images
    ? maincardValue.images.map((item: string) => ({ uri: item }))
    : [];

  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Handle PDF Download
  const handleDownloadPDF = async () => {
    if (!maincardValue?.pdf) return alert("No PDF Available!");

    setLoading(true);
    try {
      const fileUri = maincardValue.pdf; // Ensure it is a valid URL
      const localUri = `${FileSystem.documentDirectory}notification.pdf`;

      const { uri } = await FileSystem.downloadAsync(fileUri, localUri);
      setLoading(false);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        alert("Sharing is not available on this device.");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Failed to download the PDF.");
    }
  };

  return (
    <LinearGradient
      colors={["#1E1E2C", "#25253D", "#10101A"]}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
        <NotificationHeader />
        <ImageViewing
          images={images}
          imageIndex={imageIndex}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
          onImageIndexChange={setImageIndex}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full px-4 flex items-center justify-center mt-5 mb-36">
            {/* Title */}
            <Text className="text-white text-4xl text-center tracking-widest font-bold">
              {maincardValue?.title || "No Title"}
            </Text>

            {/* Images Section */}
            {maincardValue?.images?.map((item: string, index: number) => (
              <TouchableOpacity
                key={index}
                className="w-full flex"
                activeOpacity={0.8}
                onPress={() => {
                  setImageIndex(index);
                  setIsVisible(true);
                }}
              >
                <Image
                  source={{ uri: item }}
                  className="w-full h-64 rounded-xl mt-5 shadow-lg"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}

            {/* Event Date Information */}
            <View className="w-full mt-5">
              <Text className="text-white text-xl">
                📅 Start: {maincardValue?.start_date || "N/A"}
              </Text>
              <Text className="text-white text-xl">
                ⏳ End: {maincardValue?.end_date || "N/A"}
              </Text>
            </View>

            {/* Description */}
            <View className="w-full mt-5">
              <Text className="text-white text-lg leading-7">
                {maincardValue?.description
                  ? maincardValue.description.split("\n").map((line, index) => (
                      <Text key={index} className="text-white">
                        {line}
                        {"\n"}
                      </Text>
                    ))
                  : "No description available"}
              </Text>
            </View>

            {/* PDF Download Button */}
            {maincardValue?.pdf && (
              <TouchableOpacity
                onPress={handleDownloadPDF}
                className="mt-5 w-full flex items-center justify-center bg-blue-600 p-3 rounded-lg  flex-row "
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <>
                    <Feather name="download" size={24} color="white" />
                    <Text className="text-white text-lg ml-2">
                      Download PDF
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
    </LinearGradient>
  );
};

export default ShowNotification;
