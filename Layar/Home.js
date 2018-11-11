import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View  style= {emel.container}>
         <Image
           style={{alignItems: 'center', width: 350, height:400, marginBottom: 30, marginTop:30, }}
            source={require('../Layar/meler.jpg')}/>
          <Button block style={emel.btn}  onPress={() => this.props.navigation.navigate('hero')}
          >
            <Text style={{color: '#fff'}}>Start</Text>
          </Button>
        </View>
    );
  }
}

const emel = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    btn: {
        alignItems: 'center',
        marginTop: 1,
        borderRadius: 25,
        backgroundColor: '#000055',
        marginVertical: 10,
        paddingVertical: 13,
    },
}