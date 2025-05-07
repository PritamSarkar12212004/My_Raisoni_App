import React from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ImageViewingProps {
  images: { uri: string }[];
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
  onImageIndexChange?: (index: number) => void;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ImageViewing: React.FC<ImageViewingProps> = ({
  images,
  imageIndex,
  visible,
  onRequestClose,
  onImageIndexChange,
}) => {
  if (!images || images.length === 0) return null;

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: images[imageIndex].uri }}
          style={styles.image}
          resizeMode="contain"
        />
        {images.length > 1 && (
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={[styles.navButton, imageIndex === 0 && styles.navButtonDisabled]}
              onPress={() => onImageIndexChange?.(Math.max(0, imageIndex - 1))}
              disabled={imageIndex === 0}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, imageIndex === images.length - 1 && styles.navButtonDisabled]}
              onPress={() => onImageIndexChange?.(Math.min(images.length - 1, imageIndex + 1))}
              disabled={imageIndex === images.length - 1}
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
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
  navigationButtons: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
});

export default ImageViewing; 