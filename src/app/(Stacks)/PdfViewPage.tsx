import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import PdfHelper from "@/src/helper/PdfHelper";
import { userContext } from "@/src/context/ContextApi";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
const PdfViewPage = () => {
  const navigation = useNavigation();
  const { pdfValue, setpdfValue } = userContext();
  useEffect(() => {
    return () => {
      setpdfValue(null);
    };
  }, []);
  const downloadPDF = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "downloaded.pdf";
      await FileSystem.writeAsStringAsync(fileUri, pdfValue, {
        encoding: FileSystem.EncodingType.Base64,
      });
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      }
    } catch (error) {
      console.error("Download Error: ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View className="w-full flex items-start justify-center px-3 py-2 bg-white">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="h-14 w-14 bg-zinc-100 rounded-full flex items-center justify-center"
        >
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <WebView
        originWhitelist={["*"]}
        source={{ html: PdfHelper({ pdfValue }) }}
        style={{ flex: 1 }}
      />
      <TouchableOpacity
        onPress={downloadPDF}
        activeOpacity={0.8}
        style={{
          backgroundColor: "#007bff",
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          left: "10%",
          width: "80%",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Download PDF
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PdfViewPage;
