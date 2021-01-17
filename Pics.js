import React from "react"
import {Text, View, Image, Button, Linking } from "react-native"
import {EndContent} from "./EndContent";

export function Pics(props) {
  // const title = props.title;
  // const words = props.words;
  // const image = props.image;
  let title="Smile!"
  let pic_url="";

  // OR http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true choose count [1-100]
  const getAPI = () => {
    do {
    fetch("https://random.dog/woof.json")
    .then((j) => {
      return j.json()
    })
    .then((res) => {
      pic_url = res["url"]
    });
  }
    while (pic_url.endsWith(".jpg") || pic_url.endsWith(".png"));
  }


  return (
    <>
    <View style={{ alignItems: "center" }}>

      {getAPI()}
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Image source={{uri: pic_url !== null ? pic_url : './assets/icon.png'}}
      ></Image>
      <Button
      title={"Next Page"}
      onPress={() => {props.navigation.navigate("EndContent")
      }}
      ></Button>
      <Button
      title={"Go Back"}
      onPress={() => {props.navigation.goBack()
      }}
      ></Button>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      
    </View>
    </>
  );
}