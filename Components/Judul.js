import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class Judul extends Component{
	static navigationOptions = {
    title: 'PROFIL',
  };
	render(){
		return(
				<View style={styles.container}>
					<Text style={tulisan.judul}> WELCOME BOY!</Text>
                    <Text style={data.bio}> Nama    : Rafi Aqnan Pebrian</Text>
                    <Text style={data.bio}> Kelas   : XI RPL 4 </Text>
                    <Text style={data.bio}> SMK Telkom Purwokerto </Text>
					<Text style={{ marginBottom : 100}}></Text>
					
				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});
const tulisan = {
	judul : {
		color : "#000000",
		fontSize : 25,
		fontWeight : 'bold',
	}
}
const data = {
	bio : {
		color : "#000000",
		fontSize : 16,
	}
}