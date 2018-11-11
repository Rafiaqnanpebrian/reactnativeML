import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class hero extends Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Guide for Heroes
          </Text>

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 5, marginTop:10, }}
            source={{uri: 'https://i.ytimg.com/vi/OAe5JtOrHUk/hqdefault.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 5, marginTop:5, }}
            source={{uri: 'https://www.mob-leg.pl/wp-content/uploads/2018/01/mobile-legends-bang-bang-new-hero-shadowbringer-helcurt-first-look.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 30, marginTop:5, }}
            source={{uri: 'https://i.ytimg.com/vi/BxUg9h9M_l0/hqdefault.jpg'}}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#000000',

    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
  }