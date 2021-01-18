import React from "react"
import {Text, View, Image, Button, Linking, StyleSheet, Dimensions } from "react-native"
import {EndContent} from "./EndContent";

let pic_url="./assets/icon.png";
let bad = true;
const TITLE="Smile!"

export function Pics(props) {
  // OR http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true choose count [1-100]
  // const getAPI = () => {
  //   const NUM = Math.ceil(Math.random() * 100);
  //   fetch("http://shibe.online/api/shibes?count="+{NUM}+"&urls=true&httpsUrls=true")
  //   .then((j) => {
  //     console.log("first step pics");
  //     return j.json();
  //   })
  //   .then((res) => {
  //     console.log("second step pics");
  //     pic_url = res[0];
  //     console.log(pic_url)
  //     console.log("^ends bad: " + pic_url.endsWith(".gif") || pic_url.endsWith(".mp4"));
  //     bad = pic_url.trim().endsWith(".gif") || pic_url.trim().endsWith(".mp4");
  //   });
  // }

  // contains: mp4, gif, webm, jp[e]g, png
  const getAPI = () => {
    fetch("https://random.dog/woof.json")
    .then((j) => {
      console.log("first step pics");
      return j.json();
    })
    .then((res) => {
      console.log("second step pics");
      pic_url = res["url"];
      console.log(pic_url)
      console.log("^ends bad: " + pic_url.endsWith(".gif") || pic_url.endsWith(".mp4"));
      bad = pic_url.trim().endsWith(".gif") || pic_url.trim().endsWith(".mp4");
    });
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sideButtonStyle: {
      marginHorizontal: 60,
      marginTop: 10,
    },
    bottom: {
      position: 'absolute',
      bottom: 30
    }
  });

  return (
    <>
    <View style={styles.container}>

      {getAPI()}
      <Text style={{ paddingTop: 10, paddingBottom: 20, fontSize: 24, fontWeight: "bold" }}>
        {TITLE}
      </Text>
      {/* <Image source={{uri: pic_url !== null ? pic_url : './assets/icon.png'}} */}
      <Image style={{ paddingTop: 10}} source={{uri: bad ? './assets/default-picture.jpg' : pic_url}} style={{ width: Dimensions.get('window').width * 0.9, height: Dimensions.get('window').width * 0.9}}
      ></Image>

      <View style={styles.bottom}>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.sideButtonStyle}>
            <Button
              title={"Go Back"}
              onPress={() => {props.navigation.goBack()
              }}
            ></Button>
          </View>
          <View style={styles.sideButtonStyle}>         
            <Button
              title={"Next Page"}
              onPress={() => {props.navigation.navigate("EndContent");
              console.log(1)
              }}
            ></Button>
          </View>
        </View>
      </View>

      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      
    </View>
    </>
  );
}