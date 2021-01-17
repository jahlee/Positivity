import React from "react"
import {Text, View, Button, Linking } from "react-native";
import {Quote} from "./Quote";

export function MainContent(props) {
  // const title = props.title;
  // const words = props.words;
  // const image = props.image;

  getTimeOfDay = () => {
    let options = { hour: '2-digit', hour12: false };
    let hour = new Date().toLocaleTimeString('en-us', options);
    if (hour > 0 && hour < 12) {
      return "Good morning!"
    }
    else if (hour < 17) {
      return "Good evening!"
    }
    return "Good night!"
  }

  getDate = () => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let prnDt = new Date().toLocaleString('en-us', options);
    return prnDt;
  }

  return (
    <>
    <View style={{ alignItems: "center" }}>

      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        Today is {getTimeOfDay()}
      </Text>
      <Text style={{ paddingTop: 10, fontSize: 15, fontStyle: "italic" }}>{getDate()}</Text>
      <Button
      title={"Next Page"}
      onPress={() => {props.navigation.navigate("Quote")}}
      ></Button>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      
    </View>
    </>
  );
}