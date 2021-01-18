import React from "react"
import { Text, View, Button, StyleSheet } from "react-native";

export function MainContent(props) {

  getTimeOfDay = () => {
    let options = { hour: '2-digit', hour12: false };
    let hour = new Date().toLocaleTimeString('en-us', options);
    if (hour > 0 && hour < 12) {
      return "Good morning!"
    }
    else if (hour < 17) {
      return "Good afternoon!"
    }
    else {
      return "Good evening!"
    } 
  }

  getDate = () => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let prnDt = new Date().toLocaleString('en-us', options);
    return prnDt;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nextButton: {
      backgroundColor: "#90bdff",
      borderRadius: 50,
      padding: 10,
      width: "50%",
      alignItems: "center",
      marginTop: 100
    },

    bottom: {
      position: 'absolute',
      bottom: 30
    }
  });

  return (
    <>
    <View style={styles.container}>

      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {getTimeOfDay()}
      </Text>
      <Text style={{ paddingTop: 10, fontSize: 15, fontStyle: "italic" }}>Today is {getDate()}</Text>
      <View style={styles.bottom}>
        <Button
          style ={styles.nextButton}
          title={"Next Page"}
          onPress={() => {props.navigation.navigate("Quote")}}
        ></Button>
      </View>
      <View
      style={{ height: 1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      
    </View>
    </>
  );
}