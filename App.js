import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './Layar/Home';
import {hero} from './Layar/hero';
import {Judul} from './Layar/Judul';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  hero: {
    screen: hero,
  },
  Judul: {
    screen: Judul,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#000055',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}