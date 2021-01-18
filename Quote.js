import React from "react"
import {Text, View, Button, Linking, StyleSheet } from "react-native" 
import {CalvHob} from "./CalvHob"

let quote = ""

export function Quote(props) {
  // const title = props.title;
  // const words = props.words;
  // const image = props.image;
  // props.
  let title="A Quote to Inspire"
  // let quote=props.quote;
  console.log("props.quote=" + quote)
  // console.log("proprs: " + props)
  
  // http://quotes.rest/qod
  function getAPI() {
    let temp = ""
    // console.log("start api")
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((j) => {
      // console.log(j.json())
      return j.clone().json()
    })
    .then((res) => {
      // this.setState({
      //   qotd: res["qotd"],
      // });
      // console.log("resquotes: " + res)
      temp=res[0];
      quote=res;
    });
    // return temp;
    // console.log("end api")
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
      {/* {getAPI()} */}
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>
        {title}
      </Text>
      <Text style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, fontSize: 15, fontStyle: "italic" }}>{getAPI()} {quote}</Text>
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