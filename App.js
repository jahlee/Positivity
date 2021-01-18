import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { MainContent } from "./MainContent";
import { Quote } from "./Quote";
import { CalvHob } from "./CalvHob";
import { Pics } from "./Pics";
import { EndContent } from "./EndContent";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// export default class App extends Component {
//   constructor(props) {
//     super(props);

  const MainNavigator = createStackNavigator({
    MainContent: {screen: MainContent},
    Quote: {screen: Quote},
    CalvHob: {screen: CalvHob},
    Pics: {screen: Pics},
    EndContent: {screen: EndContent},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  });

  const App = createAppContainer(MainNavigator);

  export default App;

  // componentDidMount() {
  //   fetch("http://quotes.rest/qod")
  //   .then((j) => {
  //     return j.json()
  //   })
  //   .then((res) => {
  //     // this.setState({
  //     //   qotd: res["qotd"],
  //     // });
  //     all_content[1].words = res["quote"]
  //   });
  // }

//   getTime = () => {
//     let options = { hour: '2-digit', hour12: false };
//     let hour = new Date().toLocaleTimeString('en-us', options);
//     if (hour > 0 && hour < 12) {
//       return "Good morning!"
//     }
//     else if (hour < 17) {
//       return "Good evening!"
//     }
//     return "Good night!"
//   }

//   getDate = () => {
//     let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//     let prnDt = new Date().toLocaleString('en-us', options);
//     return prnDt;
//   }

//   getQOD = () => {
    
//   }

//   title = this.getTime();
//   words = this.getDate();
//   image = 'https://64.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg';
//   currPage=0;

//   render() {
//     return (
//       <View style={styles.container}>
//         <MainContent title={this.title} words ={this.words} image={this.image}
//         />
//         <Button
//           title={"Next Page"}
//           onPress={() => {
//           console.log(this.currPage);
//           this.currPage += 1;
//       }}
//       ></Button>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });