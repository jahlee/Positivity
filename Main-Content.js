import React from "react"
import {Text, View, Image, Button, Linking } from "react-native" 

export function MainContent(props) {
  const title = props.title;
  const description = props.description;
  const image = props.image;
  const url = props.url;

  return (
    <>
    <View stle={{ padding: 16 }}>
      <Image source={{uri: image }} style={{ height: 200 }}></Image>
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text>{description}</Text>
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