import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const LottiAnimation = ({ width, height, color, path }) => {
  const animation = useRef<LottieView>(null);

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
      source={path}
    />
  );
};

export default LottiAnimation;
