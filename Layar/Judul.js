import React,{Component}from 'react';
import { View, Text, StyleSheet,Image, Button, Alert } from 'react-native';

export class Judul extends Component{
	static navigationOptions = {
    title: 'PROFIL',
  };
	render(){
		return(
				<View style={styles.container}>
					<Text style={tulisan.judul}> HELLO MELER!</Text>
					<Text style={tulisan.judul}> </Text>
					<Image  style={{width:80, height: 80}}
                     source={require('../Layar/rafi.jpg')}/>
                    <Text style={tulisan.judul}> </Text>
                    <Text style={data.bio}> Nama    : Rafi Aqnan Pebrian</Text>
                    <Text style={data.bio}> Kelas   : XI RPL 4 </Text>
                    <Text style={data.bio}> No Absen: 25 </Text>
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
    backgroundColor: '#000000',
  }
});
const tulisan = {
	judul : {
		color : "#fff",
		fontSize : 25,
		fontWeight : 'bold',
	}
}
const data = {
	bio : {
		color : "#fff",
		fontSize : 16,
	}
}