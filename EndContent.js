import React from "react"
import {Text, View, Button, Linking } from "react-native" 

export function EndContent(props) {
  const title = "That's it for today!";
  const words = "Hope you have a fantastic, productive, and absolutely awesome day! See ya tomorrow!";
  // const image = props.image;

  return (
    <>
    <View style={{ alignItems: "center" }}>

      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ paddingTop: 10, fontSize: 15, fontStyle: "italic" }}>{words}</Text>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      <Button
      title={"Go Back"}
      onPress={() => {props.navigation.goBack()
      }}
      ></Button>
    </View>
    </>
  );
}