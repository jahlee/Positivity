import React from "react"
import { Text, View, Image, Button, StyleSheet, Dimensions } from "react-native"

const DEFAULT_PIC="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const TITLE="Smile!";
const API="https://random.dog/woof.json";
let pic_url = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
let bad = true;

export function Pics(props) {
  // contains: mp4, gif, webm, jp[e]g, png
  const getAPI = () => {
    fetch(API)
    .then((j) => {
      return j.json();
    })
    .then((res) => {
      pic_url = res["url"];
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
      <Image style={{ paddingTop: 10}} source={{uri: bad ? DEFAULT_PIC : pic_url}} style={{ width: Dimensions.get('window').width * 0.9, height: Dimensions.get('window').width * 0.9}}
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
              }}
            ></Button>
          </View>
        </View>
      </View>

      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24}}
      ></View>
      
    </View>
    </>
  );
}