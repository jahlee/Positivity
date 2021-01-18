import React from "react"
import { Text, View, Image, Button, StyleSheet, Dimensions } from "react-native" 

const TITLE="Daily Calvin and Hobbes";
let imgNum = 0;
const ALL_IMAGES = [
'https://64.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg',
'https://cdn0.sbnation.com/imported_assets/1025854/CH940127_JPG.jpg',
'https://cdn3.sbnation.com/imported_assets/1025866/jon3_GIF.gif',
'https://cdn1.sbnation.com/imported_assets/1025872/CH870328_JPG.jpg',
'https://cdn3.sbnation.com/imported_assets/1025890/CH860417_JPG.jpg',
'https://cdn2.sbnation.com/imported_assets/1025893/jon6_GIF.gif',
'https://cdn1.sbnation.com/imported_assets/1025899/CH860405_JPG.jpg',
'https://cdn1.sbnation.com/imported_assets/1025905/CH940105_JPG.jpg',
'https://cdn0.sbnation.com/imported_assets/1025923/CH940221_JPG.jpg'
]

export function CalvHob(props) {

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

  const randomNum = () => {
    imgNum = Math.floor(Math.random() * ALL_IMAGES.length);
    console.log(imgNum);
    console.log(ALL_IMAGES[imgNum])
  }

  return (
    <>
    <View style={styles.container}>
      {randomNum()}
      <Text style={{ paddingTop: 10, paddingBottom: 30, fontSize: 24, fontWeight: "bold" }}>
        {TITLE}
      </Text>

      <Image source={{uri: ALL_IMAGES[imgNum] !== null ? ALL_IMAGES[imgNum] : './assets/icon.png'}} style= {{ width: Dimensions.get('window').width * 0.95, height: Dimensions.get('window').height * 0.155}}
      ></Image>

      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>

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
              onPress={() => {props.navigation.navigate("Pics");
              console.log(1)
              }}
            ></Button>
          </View>
        </View>
      </View>

    </View>
    </>
  );
}