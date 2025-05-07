import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import NotificationHeader from "@/src/components/Head/NotificationHeader";
import { userContext } from "@/src/context/ContextApi";
import ImageViewing from "@/src/components/ImageViewing";

interface ImageCardValue {
  images: string[];
  title: string;
  description: string;
  pdf?: string;
}

interface ImageItem {
  uri: string;
}

const ImageShowNotification = () => {
  const { imagecardValue, setimagecardValue } = userContext() as {
    imagecardValue: ImageCardValue | null;
    setimagecardValue: (value: ImageCardValue | null) => void;
  };
  const [visible, setIsVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // Ensure imagecardValue is not null before accessing images
  const images = imagecardValue?.images
    ? imagecardValue.images.map((item: string) => ({ uri: item }))
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
        <ImageViewing
          images={images}
          imageIndex={imgIndex}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
          onImageIndexChange={setImgIndex}
        />
      )}

        <NotificationHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full px-4 flex items-center justify-center mt-5 mb-40">
            {/* Display Images */}
            {images.map((image: ImageItem, index: number) => (
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
