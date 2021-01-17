import React from "react"
import {Text, View, Image, Button, Linking } from "react-native" 

export function CalvHob(props) {
  // const title = props.title;
  // const words = props.words;
  // const image = props.image;
  let title="Daily Calvin and Hobbes"
  let image='https://64.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg'

  return (
    <>
    <View style={{ alignItems: "center" }}>

      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Image source={{uri: image !== null ? image : './assets/icon.png'}}
      ></Image>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
     <Button
      title={"Next Page"}
      onPress={() => {props.navigation.navigate("Pics")
      }}
      ></Button>
      <Button
      title={"Go Back"}
      onPress={() => {props.navigation.goBack()
      }}
      ></Button>
    </View>
    </>
  );
}