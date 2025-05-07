import React from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

interface ImageViewingProps {
  images: { uri: string }[];
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
  onImageIndexChange?: (index: number) => void;
}

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
          <View style={styles.closeButtonInner} />
        </TouchableOpacity>
        <Image
          source={{ uri: images[imageIndex].uri }}
          style={styles.image}
          resizeMode="contain"
        />
        {images.length > 1 && (
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => onImageIndexChange?.(Math.max(0, imageIndex - 1))}
              disabled={imageIndex === 0}
            />
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => onImageIndexChange?.(Math.min(images.length - 1, imageIndex + 1))}
              disabled={imageIndex === images.length - 1}
            />
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
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonInner: {
    width: 20,
    height: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
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
  },
});

export default ImageViewing; 