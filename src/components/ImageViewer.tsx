import React from 'react';
import { Modal, View, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import ImageViewing from './ImageViewing';

interface ImageViewerProps {
  images: { uri: string }[];
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  imageIndex,
  visible,
  onRequestClose,
}) => {
  if (Platform.OS === 'web') {
    return (
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={onRequestClose}
        animationType="fade"
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
          <Image
            source={{ uri: images[imageIndex].uri }}
            style={styles.image}
            contentFit="contain"
          />
        </View>
      </Modal>
    );
  }

  return (
    <ImageViewing
      images={images}
      imageIndex={imageIndex}
      visible={visible}
      onRequestClose={onRequestClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
}); 