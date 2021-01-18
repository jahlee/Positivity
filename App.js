import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { MainContent } from "./MainContent";
import { Quote } from "./Quote";
import { CalvHob } from "./CalvHob";
import { Pics } from "./Pics";
import { EndContent } from "./EndContent";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

 