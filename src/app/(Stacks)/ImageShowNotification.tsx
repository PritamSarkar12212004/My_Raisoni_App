import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { userContext } from "@/src/context/ContextApi";
import ImageView from "react-native-image-viewing";

const ImageShowNotification = () => {
  const { imagecardValue, setimagecardValue } = userContext();
  const [visible, setIsVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // Ensure imagecardValue is not null before accessing images
  const images = imagecardValue?.images
    ? imagecardValue.images.map((item) => ({ uri: item }))
    : [];

  useEffect(() => {
    return () => {
      setimagecardValue(null);
    };
  }, []);

  return (
    <LinearGradient
      colors={["#1E1E2C", "#25253D", "#10101A"]}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      {/* Image Viewer */}
      {images.length > 0 && (
        <ImageView
          images={images}
          imageIndex={imgIndex}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      )}

        <NotificationHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full px-4 flex items-center justify-center mt-5 mb-40">
            {/* Display Images */}
            {images.map((image, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setImgIndex(index);
                  setIsVisible(true);
                }}
                key={index}
                className="w-full h-80 rounded-[30px] mb-5"
              >
                <Image
                  source={image}
                  className="w-full h-full rounded-[30px] object-cover"
                />
              </TouchableOpacity>
            ))}

            {/* Title and Description */}
            {imagecardValue && (
              <View className="w-full flex mt-10">
                <Text className="text-3xl font-bold text-white">
                  {imagecardValue.title}
                </Text>
                <Text className="text-sm mt-2 text-white">
                  {imagecardValue.description}
                </Text>
              </View>
            )}
          </View>
          {imagecardValue?.pdf && (
            <View className="w-full flex items-center justify-center px-10 mb-10">
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-full py-5 rounded-3xl bg-blue-600/80 flex items-center justify-center"
              >
                <Text className="text-white text-xl font-bold text-center ">
                  Download PDF
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
    </LinearGradient>
  );
};

export default ImageShowNotification;
