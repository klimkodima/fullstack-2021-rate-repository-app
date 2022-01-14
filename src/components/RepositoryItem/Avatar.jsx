import React from "react";
import { StyleSheet, Image } from "react-native";

const Avatar = ({ avatarUrl }) => {
  const imageStyles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      margin: 10,
      borderRadius: 5,
    },
  });

  return (
    <Image
      source={{ uri: avatarUrl }}
      style={imageStyles.image}
    />
  );
};

export default Avatar;