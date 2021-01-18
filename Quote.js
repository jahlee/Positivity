import React from "react"
import { Text, View, Button, StyleSheet } from "react-native" 

let quote = "You had me at meat tornado."
const TITLE = "A Quote to Inspire"
const API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"

export function Quote(props) {
    function getAPI() {
    let temp = ""
    fetch(API)
    .then((j) => {
      return j.clone().json()
    })
    .then((res) => {
      temp=res[0];
      quote=res;
    });
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sideButtonStyle: {
      marginHorizontal: 60,
      marginTop: 10
    },
    bottom: {
      position: 'absolute',
      bottom: 30
    }

  });

  return (
    <>
    <View style={styles.container}>
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>
        {TITLE}
      </Text>
      <Text style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, fontSize: 15, fontStyle: "italic" }}>{getAPI()}{quote}</Text>
      <Text style={{ paddingTop: 20, paddingVertical: 50, fontSize: 12 }}>- Ron Swanson</Text>
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
              onPress={() => {props.navigation.navigate("CalvHob");
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