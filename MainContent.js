import React from "react"
import {Text, View, Image, Button, Linking } from "react-native" 

export function MainContent(props) {
  const title = props.title;
  const words = props.words;
  const image = props.image;

  return (
    <>
    <View style={{ alignItems: "center" }}>
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Image source={{uri: image !== null ? image : './assets/icon.png'}}
      ></Image>
      
      <Text style={{ paddingTop: 10, fontSize: 15, fontStyle: "italic" }}>{description}</Text>
      <Button
      title={"Read the article here"}
      onPress={() => {
        Linking.openURL(url);
      }}
      ></Button>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
    </View>
    </>
  );
}