import React from "react"
import {Text, View, Button, Linking, StyleSheet } from "react-native" 

export function EndContent(props) {
  const TITLE = "That's it for today!";
  const WORDS = "Hope you have a fantastic, productive, and absolutely awesome day! See ya tomorrow!";
  // const image = props.image;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nextButton:{
      backgroundColor:"#90bdff",
      borderRadius:50,
      padding:10,
      width:"50%",
      alignItems:"center",
      marginTop:100
    },

    bottom: {
      position: 'absolute',
      bottom: 30
    }
  });

  return (
    <>
    <View style={styles.container}>

      <Text style={{ paddingTop: 10, paddingBottom: 20, fontSize: 24, fontWeight: "bold" }}>
        {TITLE}
      </Text>
      <Text style={{ paddingTop: 10, paddingLeft: 8, paddingRight: 8, fontSize: 15, fontStyle: "italic" }}>{WORDS}</Text>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>

      <View style={styles.bottom}>
        <Button
          style ={styles.nextButton}
          title={"Go Back"}
          onPress={() => {props.navigation.goBack()}}
        ></Button>
      </View>

    </View>
    </>
  );
}