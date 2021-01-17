import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationActions } from "react-navigation";
import { MainContent } from "./MainContent";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getTime = () => {
    var options = { hour: '2-digit', hour12: false };
    var time = new Date().toLocaleTimeString('en-us', options);
    if (time > 0 && time < 12) {
      return "Good morning!"
    }
    else if (time < 17) {
      return "Good evening!"
    }
    return "Good night!"
  }

  getDate = () => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var prnDt = new Date().toLocaleString('en-us', options);
    return prnDt;
  }

  componentDidMount(){
    setTimeOut( () => {
        NavigationActions.navigate('login');
    }, 5000 );
}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.getTime()}</Text>
        <Text>Today is {this.getDate()}</Text>
        <Image 
          style={{ width: 100 }}
          source={{uri: 'https://64.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});