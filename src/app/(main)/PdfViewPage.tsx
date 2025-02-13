import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import PdfHelper from "@/src/helper/PdfHelper";
import { userContext } from "@/src/context/ContextApi";

const PdfViewPage = () => {
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
